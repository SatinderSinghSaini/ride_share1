let providers = [];
let users = [];
const add_user = function(){
    console.log('log')
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value
    const obj = {
        Name: name,
        Age:age,
        Gender:gender,
        vehicles:[]
    }
    providers.push(obj);
}

const add_vehicle = function(){
    const vehicle_name = document.getElementById('v_name').value;
    const vehicle_number = document.getElementById('v_number').value;
    const obj ={
        Name:vehicle_name,
        Number: vehicle_number
    }
    let provider = providers.find(data=>data.Name === name);
    if(provider){
        provider.vehicles.push(obj);
    }
}

const select_ride = function(name,v_name,src,dest,seats){
    const obj ={
        Name:name,
        Vehicle:v_name,
        source:src,
        destination:dest,
        requested_seats: seats
    }
    users.push(obj);
}

const showHideAddVehicle = function(value){
    console.log(value);
    let x = document.getElementById('vehicle-detail');
    if(value.checked){
        x.style.display = 'flex';
        x.style.flexDirection = 'column';
    }else{
        x.style.display = 'none';
    }
}

const getAvlVehicles = function(){
    let name = document.getElementById('share-name').value;
    let provider = providers.find(data=>data.Name ===name);
        let x = document.getElementsByClassName('avl-vehicles');
        for(let i=0;i< provider.vehicles.length; i++){
            x[0].append('<span>'+provider.vehicles[i].Name+ provider.vehicles[i].Number+'</span>')
        }
}