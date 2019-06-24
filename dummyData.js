export default{
    users:[
        {username:"AshenPheonix",_id:0,authType:"admin"},
        {username:"Dustin",_id:1,authType:"admin"},
        {username:"Brandon Porter", _id:2,authType:'helper'},
        {username:"Carlos Hernandez", _id:3,authType:'helper'},
        {username:'OmarS',_id:4,authType:'user'},
        {username:'Jonathan Erlich', _id:5,authType:'user'}
    ],
    tickets:[
        {_id:0, type:'login', description: "Can't Login", owner:0, assigned:null},
        {_id:1, type:'grade', description:'Grade for Project x not shown', owner:4,assigned:2},
        {_id:2, type:'react', description:'create-react-app won\'t work', owner:5, assigned:0}
    ]
}