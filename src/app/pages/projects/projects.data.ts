interface ProjectsInterface {
  title: string;
  img_link: string;
  description: string;
  content: string;
  status: boolean;
}
export class Project {
  public title: string;
  public img_link: string;
  public description: string;
  public content: string;
  public status: boolean;
  public tags: string[];

  constructor(
    title: string,
    img_link: string,
    description: string,
    content: string,
    status: boolean
  ) {
    this.title = title;
    this.img_link = img_link;
    this.description = description;
    this.content = content;
    this.status = status;
  }

}

export  class ProjectsList {
  public Projects: Project[];
  public count: number;
  public par_page: number;

  constructor (project: Project) {
    this.Projects.push(project);
  }
   addProject() {


  }
}

export  class ProjectsListDemo extends ProjectsList {

constructor () {
  super(new Project ('sd', 'sdv', 'dfb', '', true));





}


}
