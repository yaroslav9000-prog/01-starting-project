interface User{
 id : string;
 name : string;
 avatar : string;
    
    
}
interface userTask{
    /* 
  id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
  */
 id: string;
 userId: string;
 title: string;
 summary: string;
 dueDate: string;

}
export {
    User,
    userTask    
}