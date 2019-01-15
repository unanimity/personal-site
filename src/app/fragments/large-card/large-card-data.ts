export class LargeCardData {

  title: string;
  sub_title: string;
  category: string;
  timestamp: string;
  comments:  string;
  description: string;
  status: string;
  img_url: string;
  dete: { day: number, month: number};
  color: string;



  constructor() {
    this.title = 'Тестовый проет';

    this.sub_title = '';
    this.category = '';
    this.timestamp = '';
    this.comments = '';
    this.description = '';
    this.status = '';
    this.img_url = '';
    this.dete.month = 0;
    this.dete.day = 0;
    this.color = '';



  }

}
