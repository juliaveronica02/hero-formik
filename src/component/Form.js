import React, {Component} from 'react';
import {Formik, Field, Form} from 'formik'
// AxiosProvider, Get, Post, Put, withAxios } from 'react-axios';
import axios from 'axios'

class LoginForm extends Component {
    componentDidMount() {
        axios
            .get(`http://localhost:8000/heroes`)
            .then(res => {
                const heroes = res.heroes;
                this.setState({heroes})
            })
    }
    state = {
        name: '',
        born: '',
        die: '',
        description: '',
        establishment: '',
        imgUrl: ''
    }
    submit = (event) => {
        event.preventDefault();
        const {
            name,
            born,
            die,
            description,
            establishment,
            imgUrl
        } = this.state
        axios.post('http://localhost:8000/heroes', {
            name: name,
            born: born,
            die: die,
            description: description,
            establishment: establishment,
            imgUrl: imgUrl
        })
    }
    onChange = (event) => {
        console.log(event.currentTarget.name)
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    render() {
        return (
            <div className="wrapper">
                <h1>ID Heroes</h1>
                <Formik
                    initialValues={{
                    name: '',
                    born: '',
                    die: '',
                    description: '',
                    establishment: '',
                    imgUrl: ''
                }}
                    validate={values => {
                    let errors = {};
                    if (values.name === "") {
                        errors.name = "Name is required";
                    }
                    if (values.born === "") {
                        errors.born = "Born is requird";
                    }
                    if (values.die === "") {
                        errors.die = "Die is requird";
                    }
                    if (values.description === "") {
                        errors.description = "Description is requird";
                    }
                    if (values.establishment === "") {
                        errors.establishment = "Establishment is requird";
                    }
                    if (values.imgUrl === "") {
                        errors.imgUrl = "ImgUrl is requird";
                    }
                    return errors;
                }}
                    onSubmit
                    ={({setSubmitting}) => {
                    alert("Form is Validated!");
                    setSubmitting(false);
                }}>
                    render = {({touched, errors, isSubmitting}) => (
                        <Form>
                            <Field placeholder="name" type="name"/> 
                            {errors.name && touched.name ? ( - <div>{errors.name}</div>) : null}
                            {/* <Field
                                placeholder="born"
                                type="name"
                                className={`${errors.born && touched.born}`}/>
                            <Field
                                placeholder="die(Year)"
                                type="number"
                                className={`${errors.die && touched.die}`}/>
                            <Field
                                placeholder="description"
                                type="name"
                                className={`${errors.description && touched.description}`}/>
                            <Field
                                placeholder="establishment"
                                type="name"
                                className={`${errors.establishment && touched.establishment}`}/>
                            <Field
                                placeholder="IMG url"
                                type="name"
                                className={`${errors.imgUrl && touched.imgUrl}`}/> */}
                            <button type="submit">Submit</button>
                            {isSubmitting}
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
export default LoginForm;

// <Form>     <Field type="name" placeholder="heroes name"/>
// {ErrorMessage.name?<div>{ErrorMessage}</div>:null} </Form>     // state = {
// //     name: '',     //     born: '',     //     die: '',     // description:
// '',     //     establishment: '',     //     imgUrl: ''     // }     submit =
// (event)=>{         event.preventDefault();
// const{name,born,die,description,establishment,imgUrl}=this.state
// axios.post('http://localhost:3000/heroes',{             name: name,   born:
// born,             die: die,             description: description,
// establishment:establishment,             imgUrl:imgUrl         }) }
// onChange = (event)=>{         console.log(event.currentTarget.name)
// this.setState({[event.currentTarget.name]:event.currentTarget.value}) }
// render(){         return(             <div className="wrapper">     <h1>ID
// Heroes</h1>             <Formik                 initialValues={{
//  name: '',                 born: '',                 die: '',
// description: '',                 establishment: '',    imgUrl: ''
// }}             validate={values =>{ let errors={};
// if(values.name == ""){ errors.name = "Name is required";                 }
// if(values.born ===""){                     errors.born ="Born is requird";
//           }                 if(values.die ===""){ errors.die ="Die is
// requird";                 }if(values.description ===""){
// errors.description ="Description is requird";    }
// if(values.establishment ===""){ errors.establishment ="Establishment is
// requird";                 }       if(values.imgUrl ===""){
//  errors.imgUrl ="ImgUrl is requird";                 }                 return
// errors;             }}         onSubmit ={({setSubmitting})=>{
//  alert("Form is Validated!");                 setSubmitting(false);
//   }}>   render = {({touched,errors, isSubmitting})=>(                 <Form>
//             <Field placeholder="name" type="name" className={`${errors.name
// && touched.name}`}/>                     <Field placeholder="born"
// type="name" className={`${errors.born && touched.born}`}/>  <Field
// placeholder="die(Year)" type="number" className={`${errors.die &&
// touched.die}`}/>                     <Field placeholder="description"
// type="name" className={`${errors.description && touched.description}`}/>
//           <Field placeholder="establishment" type="name"
// className={`${errors.establishment && touched.establishment}`}/>
// <Field placeholder="IMG url" type="name" className={`${errors.imgUrl &&
// touched.imgUrl}`}/>                     <button type="submit">Submit</button>
//                     {isSubmitting}    </Form>             )}
// </Formik>             </div>