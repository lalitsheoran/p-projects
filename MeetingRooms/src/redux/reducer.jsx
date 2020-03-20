
import {LOGIN_SUCCESS, LOGIN_FAIL, CONFIRM, LOGOUT_SUCCESS} from '../components/common/action'
const initialState={
    data:[
        {
            floor:2,
            name:"Xartan",
            capacity:10,
            price:2700,
            id:"46fd4f54d",
            url:"https://5.imimg.com/data5/KA/FK/MY-9453083/meeting-room-curtain-blind-250x250.jpg",
            available:"Yes",
            idx:0
            },
            {
                floor:5,
                name:"Spattula",
                capacity:8,
                price:1400,
                id:"445f6df64",
                url:"https://www.kniasoa.in/wp-content/uploads/cache/2019/07/IMG_20190705_114607/2337276543.jpg",
                available:"Yes",
                idx:1
                },
                {
                    floor:1,
                    name:"Hostur",
                    capacity:7,
                    price:1680,
                    id:"1v3fd21v5d",
                    url:"https://sstaffsbusinesshub.co.uk/wp-content/uploads/2016/04/2015-Meeting-Room-1-SSDC011-1-250x250.jpg",
                    available:"Yes",
                    idx:2
                    },
                    {
                        floor:3,
                        name:"Bestie",
                        capacity:10,
                        price:2200,
                        id:"gfd8g74g6f",
                        url:"https://i.pinimg.com/originals/7a/e8/54/7ae854dbacd501d2f6b01ad46544f059.jpg",
                        available:"Yes",
                        idx:3
                        },
                        {
                            floor:1,
                            name:"Ninjax",
                            capacity:5,
                            price:1900,
                            id:"97fvdf65v6df",
                            url:"https://additmore.com/wp-content/uploads/sites/10/2018/01/c05c732538ddbdfddb4108df5d2dfb3f-glass-conference-room-sliding-door-hardware-250x250.jpg",
                            available:"Yes",
                            idx:4
                            },
                            {
                                floor:3,
                                name:"Viking",
                                capacity:6,
                                price:1550,
                                id:"fd6g54df62",
                                url:"https://www.rheged.com/wp-content/uploads/2016/08/Conference-250px-13.jpg",
                                available:"Yes",
                                idx:5
                                },
                                {
                                    floor:4,
                                    name:"Vikartan",
                                    capacity:5,
                                    price:1400,
                                    id:"vffd9v45d6b23",
                                    url:"https://s3-media2.fl.yelpcdn.com/bphoto/E9ix9bnzLJLJZFtlQVhpRg/ls.jpg",
                                    available:"Yes",
                                    idx:6
                                    },
                                    {
                                        floor:2,
                                        name:"Samtron",
                                        capacity:8,
                                        price:1800,
                                        id:"vfgdfgd45d6b23",
                                        url:"https://img.ofo.co.uk/img/ct-100928/folding-tables.jpg",
                                        available:"Yes",
                                        idx:7
                                        }
    ],
    LoggedIn:false
    
}

export const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            let copystate={...state}
            copystate.LoggedIn=true
            return copystate
        case CONFIRM:
            let copystate2={...state}
            console.log("getting",action.payload)
            copystate2.data[action.payload]={...copystate2.data[action.payload],available:"No"}
            // console.log("dekh",copystate2.data[4])
            return copystate2
        case LOGOUT_SUCCESS:
            let copystate3={...state}
            copystate3.LoggedIn=false
            return copystate3    

        default:
            return state;
    }
}
