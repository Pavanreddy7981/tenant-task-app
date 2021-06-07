import { Avatar, IconButton, Input, TextField } from '@material-ui/core'
import { ChatBubbleOutlineOutlined, HomeOutlined, MoreHoriz, MoreVert, NotificationImportantOutlined } from '@material-ui/icons'
import React from 'react'
import "./Home.css"
import Card from '../Componets/Card'

const Home = () => {
    return (
        <div className="home">
            <div className="home__sidebar">
                <img src="https://www.ownerandtenant.com/assets/Logo12.svg"/>

                <div className="home__sidebarInfo">
                    <div className="home__sidebarButton">
                        <HomeOutlined color="white"/>
                        <p> Dashboard</p>
                    </div>

                    <div className="home__sidebarButton">
                        <ChatBubbleOutlineOutlined />
                        <p> BGV</p>
                    </div>

                    <div className="home__sidebarButton">
                        <ChatBubbleOutlineOutlined />
                        <p> Moderator </p>
                    </div>

                </div>
            </div>

            <div className="home__main"> 

                <div className="home__mainTop"> 
                <div className="home__mainTopLeft"> 
                        <h2> Verify BGV </h2>
                        <h4> Welcome back <strong style={{color: 'black'}}> PavanReddy.G</strong></h4>
                </div>

                <div className="home__mainTopRight">  
                    <Avatar src="https://freesvg.org/img/Male-Avatar.png"/>
                    <p> LogOut</p>
                    <div className="home__mainTopRightInfo">
                    <IconButton>
                    <NotificationImportantOutlined />
                    </IconButton>

                    <IconButton>
                    <MoreHoriz/>
                    </IconButton>
                        
                        
                    </div>
                </div>
                    
                </div>

                <div className="home__container">
                   <div className="home__containerSub">
                   <Card src="data:image/jpeg;base64,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"/>
                   <div className="home__containerRight">
                    <div className="home__containerTopLeft">
                        <p> G.Pavan.Reddy</p>
                        <p><span className="span">Mobile Number</span> - 7981010504</p>

                    </div>
                    <div className="home__containerTopRight">
                        <p> <span className="span"> Email</span>  - pavanreddy7981@gmail.com</p>
                        <p> <span className="span">Status</span> - Await on BGV Team</p>

                    </div>
                   </div>
                   </div>
                    <div className="home__uploads">
                    <h4> BGV Document</h4>
                        <div className="home__uploadsMain">
                            
                            <Card 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeswtRuJuLZpSyJ9p_y8df-kLf2emIgzyScBMtWHGkxUyxrcnNJjuCervTmTCMITgrKSU&usqp=CAU" 
                            title="BGV Document"/>
                            <TextField style={{width:"60%"}} label="Comments" variant="outlined"/>
                        </div>
                        <div className="home__uploadsMainBottom">
                        <h4> Tenant Document</h4>
                            <div className="home__uploadsSub">
                            <Card 
                            src="https://pngimage.net/wp-content/uploads/2018/06/num%C3%A9ro-1-png-6.jpg"
                            title="Uploaded"
                            />
                            <Card 
                            src="https://www.milkcan.com.au/wp-content/uploads/2018/10/thick-stick-numeral-steel-black-number-2-600px_3.jpg"
                            title="Uploaded"
                            />
                            <Card 
                            src="https://images.thdstatic.com/productImages/384f8e48-b865-4673-8747-3792ce3c4f44/svn/barton-house-numbers-address-letters-90083-64_600.jpg"
                            title="Uploaded"
                            />
                            <Card 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeswtRuJuLZpSyJ9p_y8df-kLf2emIgzyScBMtWHGkxUyxrcnNJjuCervTmTCMITgrKSU&usqp=CAU"
                            title="Add More"
                            />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
