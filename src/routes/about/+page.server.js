import { gql } from 'graphql-request';
import { hygraph } from '$lib/data/hygraph.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const query = gql`
    query Skills {
      skills {
      mainCategory
      name
      category
      text
      icon {
        url
      }
    }
  }
  `
  const { skills } = await hygraph.request(query)

  // console.log(skills);

  // Divide skills into categories
  let artDesign = [];
  let coding = [];
  let soft = [];
  
  skills.forEach(skill => {
    if (skill.mainCategory === "Art_Design") {
      artDesign.push(skill)
    } else if (skill.mainCategory === "Coding") {
      coding.push(skill)
    } else if (skill.mainCategory === "Soft") {
      soft.push(skill)
    }
  });

  console.log(artDesign, coding, soft);


  return {
    skills: {
      artDesign,
      coding,
      soft
    }
  }
}