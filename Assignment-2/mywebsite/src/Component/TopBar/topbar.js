import React, { Component } from 'react'
import {TopNavBar,Container,Row, TopBarMenu, ListMenu, SubListMenu, SocialIconsList,SocialIconsLists} from './style'
class topbar extends Component{
    render(){
        return(
            <div>
                <TopNavBar>
	                <Container>
		                <Row>

			        <div>
				        <TopBarMenu>
					        <ListMenu><i className="fa fa-phone"></i> (564) 123 4567</ListMenu>
					        <ListMenu><i className="fa fa-envelope"></i> <a href="#">mail@example.com</a></ListMenu>
					        <ListMenu>
						        <div>
							        <span>Dropdown Menu</span>
							            <ul className="options">
								            <li><div className="arrow"></div></li>
								            <SubListMenu><a href="#">Nice First Link</a></SubListMenu>
								            <SubListMenu><a href="#">Second Link With Long Title</a></SubListMenu>
								            <SubListMenu><a href="#">Third Link</a></SubListMenu>
							            </ul>
						        </div>
					        </ListMenu>
				        </TopBarMenu>
			        </div>
			
			        <div>
				        <SocialIconsLists>
					        <SocialIconsList><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></SocialIconsList>
					        <SocialIconsList><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></SocialIconsList>
					        <SocialIconsList><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></SocialIconsList>
					        <SocialIconsList><a className="gplus" href="#"><i className="fa fa-google-plus"></i></a></SocialIconsList>
					        <SocialIconsList><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></SocialIconsList>
				        </SocialIconsLists>
			        </div>
		        </Row>

	            </Container>
                </TopNavBar>
            </div>  
        )
    }
}

export default topbar;