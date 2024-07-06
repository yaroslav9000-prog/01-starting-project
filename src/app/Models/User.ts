class User{
    public id : string;
    public name : string;
    public avatar : string;
    
    constructor(id: string, name: string, avatar:string){
        this.id = id;
        this.name = name;
        this.avatar = avatar;
    }
}
class userTask{
    /* 
  id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
  */
    public id: string;
    public userId: string;
    public title: string;
    public summary: string;
    public dueDate: string;

    constructor(id: string, userId: string, title: string, summary: string, dueDate: string){
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.summary = summary;
        this.dueDate = dueDate;
    }
}
export {
    User,
    userTask    
}