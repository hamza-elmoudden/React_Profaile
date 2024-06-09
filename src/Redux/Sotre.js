import { configureStore } from '@reduxjs/toolkit'
import project from "./Project"
import skill from "./Skills"
import crtifictions from "./Certification"
import teknologi from "./Teknologi"
import cv from "./Cv"

export const store = configureStore({
    reducer:{
       project,
       skill,
       crtifictions,
       teknologi,
       cv
    }
})