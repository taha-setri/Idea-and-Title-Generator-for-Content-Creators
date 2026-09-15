export interface TitleIdea {
  id: string;
  title: string;
  formulaName: string;
  psychologicalTrigger: string;
  predictedCtr: number;
  badge: string;
  badgeColor: string;
}

export interface HookIdea {
  id: string;
  hookType: string;
  hookTypeColor: string;
  verbalScript: string;
  visualDirection: string;
  soundDesign: string;
  retentionImpact: string;
}

export interface StructureStage {
  timeRange: string;
  stageName: string;
  objective: string;
  scriptPrompt: string;
  psychologicalRole: string;
}

export interface ContentStructure {
  platformName: string;
  estimatedDuration: string;
  stages: StructureStage[];
  goldenRule: string;
}

export interface ThumbnailConcept {
  mainVisual: string;
  overlayText: string;
  colorContrast: string;
  facialExpression: string;
  psychologicalTrick: string;
}

export interface GeneratedBundle {
  id: string;
  timestamp: number;
  topic: string;
  niche: string;
  platform: string;
  tone: string;
  titles: TitleIdea[];
  hooks: HookIdea[];
  structure: ContentStructure;
  thumbnail: ThumbnailConcept;
  viralityScore: number;
  targetEmotions: string[];
}

export interface SavedItem {
  id: string;
  type: 'title' | 'hook' | 'bundle';
  savedAt: number;
  title?: string;
  formulaName?: string;
  predictedCtr?: number;
  hook?: HookIdea;
  bundle?: GeneratedBundle;
  notes?: string;
}

export type NicheId = 
  | 'tech_ai' 
  | 'business_money' 
  | 'productivity_mindset' 
  | 'fitness_health' 
  | 'gaming' 
  | 'storytelling_drama' 
  | 'education_facts' 
  | 'marketing_creator';

export type PlatformId = 
  | 'youtube_long' 
  | 'shorts_tiktok' 
  | 'linkedin_x' 
  | 'podcast';

export type ToneId = 
  | 'shocking' 
  | 'urgent' 
  | 'inspiring' 
  | 'analytical' 
  | 'intriguing' 
  | 'practical';
