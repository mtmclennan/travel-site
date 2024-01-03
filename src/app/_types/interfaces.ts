export interface Post {
  _id: string;
  title: string;
  featuredImage: string;
  photoCaption: string;
  tags: string;
  slug: string;
  author: string;
  dateModified: string;
  datePublished: string;
  description: string;
  postBody: string;
  published: string;
}

export interface Res {
  status: string;
}

export interface Html {
  __html: string;
}

export interface Workday {
  startTime: string;
  endTime: string;
  noLunch: boolean;
  description: string;
  hoursWorked: number;
  day: string;
  date: number;
}

export interface TimeSheet {
  totalHours: number;
  employee: string;
  week: string;
  days: Workday[];
}
