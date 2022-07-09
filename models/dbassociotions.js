const course_lo_details = require('./course_lo_details.js')
const course_los = require('./course_los.js')
const course_plan_assessments = require('./course_plan_assessments.js')
const course_plan_detail_assessments = require('./course_plan_detail_assessments.js')
const course_plan_detail_outcomes = require('./course_plan_detail_outcomes.js')
const course_plan_detail_refs = require('./course_plan_detail_refs.js')
const course_plan_lecturers = require('./course_plan_lecturers.js')
const course_plan_references = require('./course_plan_references.js')
const course_plans_details = require('./course_plans_details.js')
const course_plans = require('./course_plans.js')
const course_requirements = require('./course_requirements.js')
const courses = require('./courses.js')
const curricula = require('./curricula.js')
const curriculum_los = require('./curriculum_los.js')
const curriculum_profiles = require('./curriculum_profiles.js')
const lecturers = require('./lecturers.js')
const user = require('./users.js')


//relasi antar database

//-- one to many --
courses.hasMany(course_requirements, { as: 'matkul', foreignKey: 'course_id' });
courses.hasMany(course_requirements, { as: 'matkulPrasyarat', foreignKey: 'required_course_id' });
course_requirements.belongsTo(courses);

courses.hasMany(course_plans, { foreignKey: 'course_id' });
course_plans.belongsTo(courses);

curricula.hasMany(courses, { foreignKey: 'curriculum_id' });
courses.belongsTo(curricula);

curricula.hasMany(curriculum_profiles, { foreignKey: 'curriculum_id' });
curriculum_profiles.belongsTo(curricula);

curricula.hasMany(curriculum_los, { foreignKey: 'curriculum_id' });
curriculum_los.belongsTo(curricula);

course_plans.hasMany(course_los, { foreignKey: 'course_plan_id' });
course_los.belongsTo(course_plans);

course_plans.hasMany(course_plan_assessments, { foreignKey: 'course_plan_id' });
course_plan_assessments.belongsTo(course_plans);

course_plans.hasMany(course_plans_details, { foreignKey: 'course_plan_id' });
course_plans_details.belongsTo(course_plans);

course_plans.hasMany(course_plan_references, { foreignKey: 'course_plan_id' });
course_plan_references.belongsTo(course_plans);

//-- many to many --
curriculum_los.belongsToMany(course_los, { through: course_lo_details });
course_los.belongsToMany(curriculum_los, { through: course_lo_details });

course_plan_assessments.belongsToMany(course_plans_details, { through: course_plan_detail_assessments });
course_plans_details.belongsToMany(course_plan_assessments, { through: course_plan_detail_assessments });

course_los.belongsToMany(course_plans_details, { through: course_plan_detail_outcomes });
course_plans_details.belongsToMany(course_los, { through: course_plan_detail_outcomes });

course_plan_references.belongsToMany(course_plans_details, { through: course_plan_detail_refs });
course_plans_details.belongsToMany(course_plan_references, { through: course_plan_detail_refs });

lecturers.belongsToMany(course_plans, { through: course_plan_lecturers });
course_plans.belongsToMany(lecturers, { through: course_plan_lecturers });