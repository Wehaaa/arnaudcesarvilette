interface GalleryImage {
  url: string;
  width: number; 
  height: number;
  caption: string;
 }
 
 interface WorkCategory {
  name: string;
  slug: string;
 }
 
 export interface Work {
  databaseId: number;
  title: string;
  mainTitle: string;
  subtitle: string;
  gallery: GalleryImage[];
  workCategories: {
    nodes: WorkCategory[];
  };
 }
 
 interface WorksResponse {
  works: {
    nodes: Work[];
  };
 }