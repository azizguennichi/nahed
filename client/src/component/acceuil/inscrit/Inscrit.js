import Axios from "axios"
import React ,{ useEffect , useState }from 'react'
import './inscrit.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
function Inscrit() {
const [user,setUser] = useState({
     name:'',
     cin:'',
     tel:'',
     adresse:'',
     email:'',
     poste:'',
    password:'' 
})

const onChangeInput=(e)=>{
  const {name,value}=e.target;
  setUser({...user,[name]:value})
  }
useEffect(()=>{
  Axios.get('/acceuil/Inscrit')
.then(res=>{
  setUser(res.data)})
.catch(err=>{
  console.log(err)})},[])

const handleConfirmation = () => {
  const confirmation = window.confirm("Voulez-vous vraiment envoyer le formulaire ?")
  if(confirmation) {
  handleSubmit();
  }
  }
const handleSubmit= async e =>{
  e.preventDefault()
        try {
          const {name,cin,tel,adresse,poste,email,password}=user
                const res = await fetch('/acceuil/inscrit',{
                    method:'post',
                    headers:{
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'},
                    body:JSON.stringify({name, cin,tel, adresse,poste, email,password})})
                      const data = await res.json()
                      console.log(data)
                   }catch (error) {
                  console.error(error)
              }}
           
    return (
        <div>
                <Header/>
        <div className="card" key={user.id}>   
        <h2>Inscription</h2>   
         <form onSubmit={handleConfirmation}>
        <div className="user-box">
        <label for="fullname">Nom complet:</label>
        <input type="text" value={user.name} name="name" required onChange={onChangeInput}/>
        </div>
        <div className="user-box">
        <label for="fullname">Numero carte CIN</label>
        <input type="numerique" value={user.cin} name="cin" required onChange={onChangeInput}/>
        </div>
        <div className="user-box">
        <label for="fullname">Numero Telephone</label>
        <input type="numerique" value={user.tel} name="tel" required onChange={onChangeInput}/>
        </div>
        <div className="user-box">
        <label for="fullname">Adresse:</label>
        <input type="text" value={user.adresse} name="adresse" required onChange={onChangeInput}/>
        </div>
        <div className="user-box">
        <label for="fullname">Poste de travail:</label>
        <input type="text" value={user.poste} name="poste" required onChange={onChangeInput}/>
        </div>
        <div className="user-box">
        <label for="fullname">Adresse email:</label>
        <input type="text" value={user.email} name="email" required onChange={onChangeInput}/>
        </div>
        <div className="user-box">
        <label for="password">Mot de passe:</label>
        <input type="password" value={user.password} name="password" requiredonChange={onChangeInput}/>
        </div>
        <button type="submit" >Sinscrire </button>
</form>
</div>  
<Footer/>
</div>
)}

export default Inscrit