import {Router} from 'express'
import Student from '../models/Student.js'

const router = Router()

// Homepage: GET /students?search=term$cohort=Year%201
router.get('/', async (req, res) =>{
    const {search = "", cohort = ""} = req.query

    const q = {}
    if(search){
        q.$or = [
            {firstName: new Regex(search, 'i')},
            {lastName: new Regex(search, 'i')},
            {email: new Regex(search, 'i')},
            {interests: new Regex(search, 'i')},
        ]
    }
    if(cohort) q.cohort = cohort

    const students = await Student.find(q).sort({createdAt: -1}).lean()
    res.render('students/index', {students, search, cohort})
})

export default Router
