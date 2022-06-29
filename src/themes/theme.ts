import { DefaultTheme } from "styled-components";


declare module "styled-components"{
    export interface DefaultTheme{
        pallete:{
          sistemColors:{
            verdeLima: String,
            verdeFloresta:String,
            LaranjaForte:String,
            laranja:String,
            background:String,
            backgroundHeader:String,
          }
        };
        text:{
            fontSize:{
                xsmal:String,
                small:String,
                medium:String,
                large:String,
            }
        };
    }
}


export const theme:DefaultTheme = {

    pallete:{
      sistemColors:{
        verdeLima:'#7A871E',
        verdeFloresta:'#104210',
        LaranjaForte:'#E55B13',
        laranja:'#F6A21E',
        background:'#31352E',
        backgroundHeader:'#5c6357be',
      }
    },
    text:{
      fontSize:{
        xsmal:'1rem',
        small:'2rem',
        medium:'4rem',
        large:'6rem'
      },
    }
}


  