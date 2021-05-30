import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { toast } from 'react-toastify';
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET, LOCAL_LOG_IN } from "./AuthQueries";

export default () => {
  // 새로운 state변수 선언하고, action이라고 칭한다. action은 "logIn"임
  // setAction으로 값 바꿀수 있음
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const secret = useInput("");
  const email = useInput("slgktn92@naver.com");
  const [requestSecretMutation] = useMutation(LOG_IN, {
    // mutation 발생할 떄 실행하는 함수
    /*
    update: (_, {data}) => {
      const {requestSecret} = data;
      if(!requestSecret){
        toast.error("You don't have an account yet, create one");
        setTimeout(() => setAction("signUp"), 1000);
      } else{
        console.log("success");
      }
    },
    */

    variables: { email: email.value },
  });
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value
    }
  });
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);


  const onSubmit = async(e) => {
    e.preventDefault();
    if(action === "logIn"){
      if (email.value !== "") {
        try{
          const { data: {requestSecret} } = await requestSecretMutation();
          if(!requestSecret){
            toast.error("You don't have an account yet, create one");
            setTimeout(() => setAction("signUp"), 1000);
          } else{
            toast.success("Check your inbox for your login secret");
            setAction("confirm");
          }
        } catch{
          toast.error("Can't request secret, try again");
        }
      } else{
        toast.error("Email is required");
      }
    } else if (action === "signUp"){
      if(
        email.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
       ){
         try{
           const { data: {createAccount} } = await createAccountMutation();
           if(!createAccount){
             toast.error("Can't create account");
           } else{
              toast.success("Account created! Log In now");
              setTimeout(() => setAction("logIn"), 1000);
           }
         } catch(e){
           toast.error(e.message);
         }
      } else{
        toast.error("All fields are required");
      }
    } else if(action === "confirm"){
      if(secret.value !== ""){
        try{
          // confirmSecret을 token이라는 변수에 저장
          const { data: {confirmSecret: token } } = await confirmSecretMutation();
          if(token !== "" && token !== undefined){
            localLogInMutation( {variables: {token} });
          } else{
            throw Error();
          }
        } catch{
          toast.error("Can't confirm secret");
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
