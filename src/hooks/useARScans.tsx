import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

export interface ARScan {
  id: string;
  user_id: string;
  image_url: string | null;
  detected_plant_name: string | null;
  confidence_score: number | null;
  environmental_data: any;
  recommendations: string[] | null;
  location_data: any;
  created_at: string;
  updated_at: string;
}

export const useARScans = () => {
  const [scans, setScans] = useState<ARScan[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchScans = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('ar_scans')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setScans((data || []) as ARScan[]);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error fetching scans",
        description: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  const saveScan = async (scanData: {
    image_url?: string;
    detected_plant_name?: string;
    confidence_score?: number;
    environmental_data: {
      temperature: number;
      humidity: number;
      soilMoisture: number;
      lightHours: number;
      [key: string]: any; // Allow additional properties like weather, location
    };
    recommendations?: string[];
    location_data?: any;
  }) => {
    if (!user) return null;

    try {
      const { data, error } = await supabase
        .from('ar_scans')
        .insert({
          user_id: user.id,
          ...scanData
        })
        .select()
        .single();

      if (error) throw error;
      
      setScans(prev => [data as ARScan, ...prev]);
      
      toast({
        title: "Scan saved!",
        description: "Your AR scan data has been saved successfully."
      });

      return data;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving scan",
        description: error.message
      });
      return null;
    }
  };

  const deleteScan = async (scanId: string) => {
    try {
      const { error } = await supabase
        .from('ar_scans')
        .delete()
        .eq('id', scanId);

      if (error) throw error;
      
      setScans(prev => prev.filter(scan => scan.id !== scanId));
      
      toast({
        title: "Scan deleted",
        description: "The scan has been removed."
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting scan",
        description: error.message
      });
    }
  };

  useEffect(() => {
    fetchScans();
  }, [user]);

  return {
    scans,
    loading,
    saveScan,
    deleteScan,
    fetchScans
  };
};