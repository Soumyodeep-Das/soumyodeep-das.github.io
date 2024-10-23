const BASE_API_URL = 'https://portfolio-api-two-rho.vercel.app/api/';

const dataFetchTemplate = async (url) => {
    const response = await fetch(`${BASE_API_URL}${url}/`);
    const data = await response.json();
    return data;
}

export const fetchAboutData = async () => {
    return await dataFetchTemplate('about');
}

export const fetchContactData = async () => {
    return await dataFetchTemplate('contact');
}

export const fetchEducationData = async () => {
    return await dataFetchTemplate('education');
}

export const fetchExperienceData = async () => {
    return await dataFetchTemplate('experience');
}

export const fetchProjectsData = async () => {
    return await dataFetchTemplate('project');
}

export const fetchSkillsData = async () => {
    return await dataFetchTemplate('skill');
}

export const fetchHomeData = async () => {
    return await dataFetchTemplate('home');
}

export const fetchResumeData = async () => {
    return await dataFetchTemplate('resume');
}

export const fetchFooterData = async () => {
    return await dataFetchTemplate('footer');
}

export const fetchHeaderData = async () => {    
    return await dataFetchTemplate('header');
}
