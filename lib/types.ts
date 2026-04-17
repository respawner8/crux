export type UserId = string;
export type MeetingId = string;

export interface User {
  id: UserId;
  name: string;
  initials: string;
  color: string;
}

export interface ActionItem {
  id: string;
  text: string;
  owner: User;
  dueDate?: string;
  done: boolean;
}

export interface TranscriptEntry {
  timestamp: string;
  speaker: User;
  text: string;
}

export interface Meeting {
  id: MeetingId;
  title: string;
  date: string;
  durationMinutes: number;
  participants: User[];
  summary: string;
  keyPoints: string[];
  actionItems: ActionItem[];
  transcript: TranscriptEntry[];
}
