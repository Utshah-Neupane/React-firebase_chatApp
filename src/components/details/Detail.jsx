import "./Detail.css";
import { auth } from "../../lib/firebase";


const Detail = () => {
  return (
    <div className='detail'>

      <div className = 'user'>
        <img src =  './avatar.png' alt = ""/>
        <h2>Jane Doe</h2>
        <p>I still do not understand.</p>
      </div>


      <div className = 'info'>
        
        <div className = 'option'> 
          <div className = 'title'>
            <span>Chat Settings</span>
            <img src = './arrowUp.png' alt = ""/>
          </div>
        </div>


        <div className = 'option'> 
          <div className = 'title'>
            <span>Privacy & help</span>
            <img src = './arrowUp.png' alt = ""/>
          </div>
        </div>


        <div className = 'option'> 
          <div className = 'title'>
            <span>Shared photos</span>
            <img src = './arrowDown.png' alt = ""/>
          </div>

          <div className = 'photos'>

            <div className = 'photoItem'> 
              <div className = 'photoDetail'>
                <img src = 'https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt = ""/>
                <span>photo_2024_2.png</span>
              </div>      
              <img src = "./download.png" alt = "" className = "icon"/>
            </div>

            <div className = 'photoItem'> 
              <div className = 'photoDetail'>
                <img src = 'https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt = ""/>
                <span>photo_2024_2.png</span>
              </div>      
              <img src = "./download.png" alt = "" className = "icon"/>
            </div>

            <div className = 'photoItem'> 
              <div className = 'photoDetail'>
                <img src = 'https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt = ""/>
                <span>photo_2024_2.png</span>
              </div>      
              <img src = "./download.png" alt = "" className = "icon"/>
            </div>

            <div className = 'photoItem'> 
              <div className = 'photoDetail'>
                <img src = 'https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt = ""/>
                <span>photo_2024_2.png</span>
              </div>      
              <img src = "./download.png" alt = "" className = "icon"/>
            </div>
          </div>
        </div>


        <div className = 'option'> 
          <div className = 'title'>
            <span>Shared Files</span>
            <img src = './arrowUp.png' alt = ""/>
          </div>
        </div>


        <button>Block User</button>
        <button className = 'logOut' onClick={() => auth.signOut()}>LogOut</button>

      </div>

    </div>
  )
}

export default Detail