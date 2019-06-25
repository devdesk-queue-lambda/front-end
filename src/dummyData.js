export default{
    users:[
        {username:"AshenPheonix",id:0,authorizationType:"admin"},
        {username:"Dustin",id:1,authorizationType:"admin"},
        {username:"Brandon Porter", id:2,authorizationType:'helper'},
        {username:"Carlos Hernandez", id:3,authorizationType:'helper'},
        {username:'OmarS',id:4,authorizationType:'user'},
        {username:'Jonathan Erlich', id:5,authorizationType:'user'}
    ],
    tickets:[
        {
            id:0, 
            type:'login', 
            description: "Can't Login", 
            owner:2, 
            assigned:null,
            date:new Date(2019,4,12),done:false
        },
        {id:1, type:'grade', description:'Grade for Project x not shown', owner:4,assigned:2,date:new Date(2019,4,1),done:false},
        {id:2, type:'react', description:'create-react-app won\'t work', owner:5, assigned:null,date:new Date(2019,4,30),done:false},
        {id:3, type:'react', description:'create-react-app won\'t work', owner:5, assigned:null,date:new Date(2019,4,30),done:false},
        {id:4, type:'react', description:'create-react-app won\'t work', owner:5, assigned:null,date:new Date(2019,4,30),done:false},

    ]
}