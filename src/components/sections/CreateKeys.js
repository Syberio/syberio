import React from 'react';
import { useState, useEffect } from 'react';
import KeySizeSelector from './KeySizeSelector';

import * as openpgp from 'openpgp';



import {
  ChakraProvider,
  Text,
  theme,
  Stack, 
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Center,
  InputGroup,
  InputRightElement

} from '@chakra-ui/react';

const CreateKeys = () => {
    const [keyType, setKeyType] = useState("");
    const [keySize, setKeySize] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);

    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        console.log("formValues:", formErrors);
       
            setIsSubmit(true);
        
            if(keyType === "ecc" && formValues.email !="" && formValues.password!="" && formValues.username!=""){
              console.log(formValues.username)
              createECCKeys( formValues.username,  formValues.email,  formValues.password);
              
               }
              else if (keyType=== "rsa"  && formValues.email !="" && formValues.password!="" && formValues.username!="")
               {
            
                  createRSAKeys( formValues.username,  formValues.email,  formValues.password);
          
              
              }
              else if (keyType=== "dsa"  && formValues.email !="" && formValues.password!="" && formValues.username!=""){
                createDSAKeys( formValues.username,  formValues.email,  formValues.password);
      
               }
            
        
       
      };
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
   
    // const isInvalid = passphrase ==="" || email ==="" || name ==="";

    const handleSignIn = (event) =>{
        event.preventDefault();
    }

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function createDSAKeys(userName, email, password) {
        (async () => {
            const { privateKey, publicKey, revocationCertificate } = await openpgp.generateKey({
                type: "ecc", // Type of the key, defaults to ECC
                curve: 'ed25519', // ECC curve name, defaults to curve25519
                userIDs: [{ name: userName,email:email}], // you can pass multiple user IDs
                passphrase: password, // protects the private key
                format: 'armored' // output key format, defaults to 'armored' (other options: 'binary' or 'object')
            });

            console.log("---------------DSA----------------")
            console.log("Username:", userName);
            console.log("Email:", email);
            downloadFile(privateKey, "privateKey.txt");
            downloadFile(publicKey, "publicKey.txt");

         

            console.log(privateKey);     // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
            console.log(publicKey);      // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
            console.log(revocationCertificate); // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
        })();
    


    }
    function downloadFile(data, name){
        const blob = new Blob([data], {type:"octet-stream"});

        const href = URL.createObjectURL(blob);

        const a = Object.assign(document.createElement("a"), {
            href, style: "display:none",
            download:name,
        });
        document.body.appendChild(a);

        a.click();
        URL.revokeObjectURL(href);
        a.remove();
    }

    
   function createECCKeys(userName, email, password) {
    
        (async () => {
            const { privateKey, publicKey, revocationCertificate } = await openpgp.generateKey({
                type: "ecc", // Type of the key, defaults to ECC
                curve: 'curve25519', // ECC curve name, defaults to curve25519
                userIDs: [{ name: userName,email:email}], // you can pass multiple user IDs
                passphrase: password, // protects the private key
                format: 'armored' // output key format, defaults to 'armored' (other options: 'binary' or 'object')
            });

            console.log("---------------ECC----------------")
            console.log("Username:", userName);
            console.log("Email:", email);


            downloadFile(privateKey, "privateKey.txt");
            downloadFile(publicKey, "publicKey.txt");

            console.log(privateKey);     // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
            console.log(publicKey);      // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
            console.log(revocationCertificate); // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
        })();
    
   
   }
  const handleHidden = () => setShow(!show)

   function createRSAKeys(userName, email, password) {
    (async () => {
        const { privateKey, publicKey, revocationCertificate } = await openpgp.generateKey({
            type: 'rsa', // Type of the key
            rsaBits: 4096, // RSA key size (defaults to 4096 bits)
            userIDs: [{ name: userName, email: email }], // you can pass multiple user IDs
            passphrase: password // protects the private key
        });
        console.log("---------------RSA----------------")
        console.log("username", userName);
        console.log(email);
        downloadFile(privateKey, "privateKey.txt");
        downloadFile(publicKey, "publicKey.txt");
    
        console.log(privateKey);     // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
        console.log(publicKey);      // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
        console.log(revocationCertificate);
        
        
    })();
    }
   
  
   function handleChangeKey(e) {
    console.log()
    setKeyType(e.target.value)
    }
    return(
        <><Stack
            as="form"
            spacing={5}
            align="stretch"
            pb={3}
        >
            <Center>
                <p>
                    <b>Create your key with SYBERIO</b>
                </p>
            </Center>
            <FormControl onSubmit={handleSubmit}>
                <Text fontSize='sd' textAlign="center">Let's create public and private key pair step by step!</Text>

                <FormLabel marginTop='2vh'>Key Type</FormLabel>
                <Select size='sm' required onChange={handleChangeKey} marginTop='1vh' value={keyType}>
                    <option disabled={true} value="">
                        Choose Key Type
                    </option>
                    <option value='rsa'>RSA</option>
                    <option value='dsa'>DSA</option>
                    <option value='ecc'>ECC</option>
                </Select>
                <FormLabel marginTop='2vh'>Key Size</FormLabel>
                <KeySizeSelector value={keySize} keyType={keyType}></KeySizeSelector>
                <br />

                <div className="container">
                    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
    ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    )
    } */}

                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <FormLabel marginTop='2vh'>Name</FormLabel>
                            <Input placeholder='Name'
                                name="username"
                                value={formValues.username}
                                onChange={handleChange} />
                        </div>
                        <div className="field">
                            <FormLabel marginTop='2vh'>Email</FormLabel>
                            <Input type='email'
                                name="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange} />
                        </div>
                        <div className="field">
                            <FormLabel marginTop='2vh'>Passphrase</FormLabel>
                            <InputGroup>
                                <Input
                                    name="password"
                                    placeholder="Password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    type={show ? 'text' : 'password'} />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleHidden}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </FormControl>
        </Stack><Button type="submit" onClick={handleSubmit}>Download Keys</Button></> 
    );   
}

export default CreateKeys;