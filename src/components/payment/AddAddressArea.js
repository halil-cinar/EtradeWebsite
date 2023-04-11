import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { bindActionCreators } from "redux";
import { addToAddressList } from "../../redux/actions/userActions";
//props
//isOpen:bool
class AddAddressArea extends Component {
constant={
  city:{
    id:"il_id"
  }
}


  state = {
    isOpen: false,
    city:[],
    district:[],
    locality:[],
    neighborhood:[],
    name:"",
    surname:"",
    phoneNumber:"",
    address:"",
    title:"",
    selectedLocation:{
      city:"",
      cityId:"",
      district:"",
      neighborhood:"",
      locality:""
    }


  };

  textBoxOnChange=(event)=>{
    let {name,value} =event.target
    this.setState({[name]:value})
  }


  selectBoxOnChange=(event)=>{
    let {name,value}=event.target
    let selectedLocation={...this.state.selectedLocation}
    const key=name+"Id"
    selectedLocation[name]=this.state[name].find(item=>item[key]==value)[name+"Name"]
    if(name=="city"){
      selectedLocation["cityId"]=value
    }
      this.setState({selectedLocation:{...selectedLocation}})
      console.log(selectedLocation)
  }

  getCity=()=>{
    fetch("http://localhost:3003/tbl_il")
      .then((response) => response.json())
      .then((result) => {this.setState({city:result})});
  }

  getDistrict=(cityId)=>{
    console.log(cityId)
    fetch("http://localhost:3003/tbl_ilce?cityId="+cityId)
    .then((response) => response.json())
    .then((result) => {this.setState({district:result})});
  }
  getLocality=(districtId)=>{
    console.log(districtId)
    fetch("http://localhost:3003/tbl_semt?districtId="+districtId)
    .then((response) => response.json())
    .then((result) => {this.setState({locality:result})});
  }
  getNeighborhood=(localityId)=>{
    console.log(localityId)
    fetch("http://localhost:3003/tbl_mahalle?localityId="+localityId)
    .then((response) => response.json())
    .then((result) => {this.setState({neighborhood:result})});
  }
  

  componentDidMount() {
    this.setState({ isOpen: this.props.isOpen });

    this.getCity()
      
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  getAddress=()=>{
    const {address,selectedLocation,name,surname,title,phoneNumber}=this.state
    return {address,name,surname,title,phoneNumber,...selectedLocation}
  }

  onSubmit=(event)=>{
    event.preventDefault();
    this.props.actions.addToAddressList(this.getAddress(),this.props.userData)
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Addres Ekle</ModalHeader>
          <ModalBody>
            <form onSubmit={this.onSubmit} className="d-flex justify-content-center flex-wrap">
              <div
                style={{
                  flex: "1 0 47%",
                  minWidth: "190px",
                  margin: "0 1.5% ",
                }}
              >
                <label htmlFor="name">İsim giriniz:</label>
                <Input
                  className="w-100"
                  name="name"
                  type="text"
                  aria-label="İsim"
                  placeholder="İsim giriniz"
                  onChange={this.textBoxOnChange}
                />
              </div>
              <div
                style={{
                  flex: "1 0 47%",
                  minWidth: "190px",
                  margin: "0 1.5% ",
                }}
              >
                <label htmlFor="surname">Soyisim giriniz:</label>
                <Input
                  className="w-100"
                  name="surname"
                  type="text"
                  aria-label="Soyisim"
                  placeholder="Soyisim giriniz"
                  onChange={this.textBoxOnChange}
                />
              </div>
              <div
                style={{
                  flex: "1 0 47%",
                  minWidth: "190px",
                  margin: "0 1.5% ",
                }}
              >
                <label htmlFor="phoneNumber">Telefon Numarası giriniz:</label>
                <Input
                  className="w-100"
                  name="phoneNumber"
                  type="tel"
                  aria-label="Telefon Numarası"
                  placeholder="Telefon Numarası giriniz"
                  onChange={this.textBoxOnChange}
                />
              </div>
              <div
                style={{
                  flex: "1 0 47%",
                  minWidth: "190px",
                  margin: "0 1.5% ",
                }}
              >
                <label htmlFor="city">Şehir Seçiniz:</label>
                <Input
                  className="w-100"
                  name="city"
                  type="select"
                  aria-label="Şehir"
                  placeholder="Şehir giriniz"
                  onChange={(event)=>{this.getDistrict(event.target.value);this.selectBoxOnChange(event)}}
                >
                  <option
                    className="text-muted"
                    selected
                    disabled
                    hidden
                    value={-1}
                  >
                    Şehir giriniz
                  </option>

                  {
                    this.state.city.map((item)=>(
                       <option value={item.cityId}>{item.cityName}</option> 
                    ))
                  }
                </Input>
              </div>
              <div
                style={{
                  flex: "1 0 30%",
                  minWidth: "120px",
                  margin: "0 1.5% ",
                }}
              >
                <label htmlFor="district">İlçe giriniz:</label>
                <Input
                  className="w-100"
                  name="district"
                  type="select"
                  aria-label="İlçe"
                  placeholder="İlçe giriniz"
                  onChange={(event)=>{this.getLocality(event.target.value);this.selectBoxOnChange(event)}}
                >
                  <option
                    className="text-muted"
                    selected
                    disabled
                    hidden
                    value={-1}
                  >
                    İlçe Seçiniz
                  </option>

                  {
                    this.state.district.map((item)=>(
                      <option value={item.districtId}>{item.districtName}</option>
                    ))
                  }
                </Input>
              </div>
              <div
                style={{
                  flex: "1 0 30%",
                  minWidth: "120px",
                  margin: "0 1.5% ",
                }}
              >
                <label htmlFor="locality">Semt Seçiniz:</label>
                <Input
                  className="w-100"
                  name="locality"
                  type="select"
                  aria-label="Semt"
                  placeholder="Semt Seçiniz"
                  onChange={(event)=>{this.getNeighborhood(event.target.value);this.selectBoxOnChange(event)}}
                >
                   <option
                    className="text-muted"
                    selected
                    disabled
                    hidden
                    value={-1}
                  >
                    Semt Seçiniz
                  </option>
                  {
                    this.state.locality.map((item)=>(
                       <option value={item.localityId}>{item.localityName}</option> 
                    ))
                  }

                </Input>
              </div>
              <div
                style={{
                  flex: "1 0 30%",
                  minWidth: "120px",
                  margin: "0 1.5% ",
                }}
              >
                <label htmlFor="neighborhood">Mahalle seçiniz:</label>
                <Input
                  className="w-100"
                  name="neighborhood"
                  type="select"
                  aria-label="Mahalle"
                  placeholder="Mahalle seçiniz"
                  onChange={this.selectBoxOnChange}
                >
                   <option
                    className="text-muted"
                    selected
                    disabled
                    hidden
                    value={-1}
                  >
                    Mahalle Seçiniz
                  </option>

                  {
                    this.state.neighborhood.map((item)=>(
                       <option value={item.neighborhoodId}>{item.neighborhoodName}</option> 
                    ))
                  }
                </Input>
              </div>
              <div
                style={{
                  flex: "1 0 100%",
                  minWidth: "190px",
                  margin: "0 1.5% ",
                }}
              >
                <label htmlFor="address">Tam Adres giriniz:</label>
                <Input
                  className="w-100"
                  style={{ resize: "none" }}
                  name="address"
                  type="textarea"
                  aria-label="Tam Adres"
                  placeholder="Tam Adres giriniz"
                  onChange={this.textBoxOnChange}
                />
              </div>

              <div
                style={{
                  flex: "1 0 100%",
                  minWidth: "190px",
                  margin: "0 1.5% ",
                }}
              >
                <label htmlFor="title">Başlık giriniz:</label>
                <Input
                  className="w-100"
                  name="title"
                  type="text"
                  aria-label="Başlık"
                  placeholder="Başlık giriniz"
                  onChange={this.textBoxOnChange}
                />
              </div>

              <div
                style={{
                  flex: "1 0 47%",
                  minWidth: "150px",
                  margin: "0 1.5% ",
                }}
              >
                <Button className="w-100" onClick={this.toggle} color="dark">
                  Vazgeç
                </Button>
              </div>
              <div
                style={{
                  flex: "1 0 47%",
                  minWidth: "150px",
                  margin: "0 1.5% ",
                }}
              >
                <Button type="submit" className="w-100" color="success">
                  Ekle
                </Button>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            {this.state.selectedLocation.city}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    userData:state.userReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions:{
        addToAddressList:bindActionCreators(addToAddressList,dispatch),
        
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddAddressArea);
