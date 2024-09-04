import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import connect from "@/dbConfig/dbConfig";
import RecuriterModel from "@/model/recuriter";


export const authOption:NextAuthOptions={
    providers:[
        CredentialsProvider({
            id:'credentials',
            name: 'Credentials',
            credentials:{
              email: {label: 'Email', type: 'text', placeholder: 'Email'},
              password: {label: 'Password', type: 'password', placeholder: 'Password'},
            },
            async authorize(credentials:any): Promise<any>{
                connect();
                try {
                    const recuriter=await RecuriterModel.findOne({
                        $or:[
                            {
                              userName:credentials.identifier
                            },{
                              email:credentials.identifier,
                            },{
                                company:credentials.identifier,
                            }
                        ]
                    })
                    if(!recuriter){
                        throw new Error('Invalid credentials');
                    }
                    const validPass=await bcrypt.compare(recuriter.password,credentials.password);
                    if(!validPass){
                        throw new Error('Invalid credentials');
                    }
                     return recuriter;
                } catch (error:any) {
                    throw new Error(error);
                }
            }
                 
        })
    ],
    callbacks:{

    },
    pages:{
        signIn:'/sign-in'
    },
    session:{
        strategy:"jwt"
    },
    secret:process.env.SECRETKEY
}