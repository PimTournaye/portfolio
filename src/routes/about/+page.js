/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    let { skills } = await fetch('/about.json').then(res =>
        res.json()
    )

    // Make array of skills
    let web = []
    let coding = []
    let aiMlIot = []
    let creative = []
    let design = []
    let other = []

    // Subdivide skills into their categories
    skills.forEach((skill) => {
        switch (skill.category.toString()) {
            case 'Coding':
                coding.push(skill);
                break;
            case 'Web':
                web.push(skill);
                break;
            case 'AI, ML & IoT':
                aiMlIot.push(skill);
                break;
            case 'Creative':
                creative.push(skill);
                break;
            case 'Design':
                design.push(skill);
                break;
            default:
                other.push(skill);
        }
    });

    skills = {
        web,
        coding,
        aiMlIot,
        creative,
        design,
        other
    }
    return skills    
}
