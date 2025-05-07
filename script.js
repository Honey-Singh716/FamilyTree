// Add this near the top of your script.js
const isLocalhost = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1';
const BASE_PATH = isLocalhost ? '' : '/family-tree';

// Then modify the getImagePath function:
const getImagePath = (rawPath) => {
    const filename = rawPath.split('\\').pop();
    return `${BASE_PATH}/images/${filename}`;
};
const familyData = {
    id: 1,
    name: "Shri Chandrapal Singh",
    dob: "dob1",
    age: "age1",
    occupation: "English Teacher",
    photo: "images/chandrapal.jpg",
    spouse: {
        id: 2,
        name: "Shrimati Ghosan",
        dob: "dob2",
        age: "age2",
        occupation: "House Wife",
        photo: "images/ghosan.jpg"
    },
    children: [
        // Son 1 - Late Mr. Ajay Gautam
        {
            id: 3,
            name: "Late Mr. Ajay Gautam",
            photo: "images/ajay.jpg",
            spouse: {
                id: 4,
                name: "Mrs. Renu Gautam",
                dob: "20 Feb",
                age: "age4",
                occupation: "House Wife & Tailor",
                photo: "images/renu.jpg"
            },
            children: [
                {
                    id: 5,
                    name: "Kunal",
                    dob: "18 May 2018",
                    age: "6 yrs",
                    occupation: "Class 1st",
                    photo: "images/kunal.jpg",
                    birthOrder: 4
                },
                {
                    id: 6,
                    name: "Ritik",
                    dob: "2 May 2012",
                    age: "13 yrs",
                    occupation: "5th Class",
                    photo: "images/ritik.jpg",
                    birthOrder: 3
                },
                {
                    id: 7,
                    name: "Shalu",
                    dob: "30 Dec 2009",
                    age: "16 yrs",
                    occupation: "10th Class",
                    photo: "images/shalu.jpg",
                    birthOrder: 2
                },
                {
                    id: 8,
                    name: "Tannia",
                    dob: "21 Feb 2008",
                    age: "17 yrs",
                    occupation: "12th Class",
                    photo: "images/tannia.jpg",
                    birthOrder: 1
                }
            ].sort((a, b) => a.birthOrder - b.birthOrder)
        },
        // Son 2 - Mr. Sunil Kumar
        {
            id: 9,
            name: "Mr. Sunil Kumar",
            dob: "1 March 1979",
            age: "46",
            occupation: "Work at Office",
            photo: "images/sunil.jpg",
            spouse: {
                id: 10,
                name: "Mrs. Santosh",
                dob: "5 Aug 1980",
                age: "45 yrs",
                occupation: "House Wife & Work at Shop",
                photo: "images/santosh.jpg"
            },
            children: [
                {
                    id: 11,
                    name: "Honey Singh",
                    dob: "12-11-2006",
                    age: "18 yrs",
                    occupation: "Btech Student",
                    photo: "images/honey.jpg",
                    birthOrder: 1
                },
                {
                    id: 12,
                    name: "Abhi Singh",
                    dob: "21 Feb 2008",
                    age: "17 yrs",
                    occupation: "12th Class",
                    photo: "images/abhi.jpg",
                    birthOrder: 2
                }
            ].sort((a, b) => a.birthOrder - b.birthOrder)
        },
        // Son 3 - Mr. Dibbu Singh
        {
            id: 13,
            name: "Mr. Dibbu Singh",
            dob: "15 June 1974",
            age: "51 yrs",
            occupation: "Advocate",
            photo: "images/dibbu.jpg",
            spouse: {
                id: 14,
                name: "Mrs. Urmilla",
                dob: "10 Feb 1984",
                age: "41 yrs",
                occupation: "House Wife & Tailor",
                photo: "images/urmila.jpg"
            },
            children: [
                {
                    id: 15,
                    name: "Tanvi Singh",
                    dob: "24 Jan 2006",
                    age: "19 yrs",
                    occupation: "12th Passed (Dropper) & Neet Aspirant",
                    photo: "images/tanvi.jpg",
                    birthOrder: 1
                },
                {
                    id: 16,
                    name: "Happy Singh",
                    dob: "15 Nov 2007",
                    age: "17 yrs",
                    occupation: "class-12th",
                    photo: "images/happy.jpg",
                    birthOrder: 2
                },
                {
                    id: 17,
                    name: "Mehul Singh",
                    dob: "25 Oct 2016",
                    age: "8 yrs",
                    occupation: "Class-3rd",
                    photo: "images/mehul.jpg",
                    birthOrder: 3
                }
            ].sort((a, b) => a.birthOrder - b.birthOrder)
        },
        // Son 4 - Mr. Mukesh Gautam
        {
            id: 18,
            name: "Mr. Mukesh Gautam",
            dob: "dob4",
            age: "Age4",
            occupation: "Work at Home",
            photo: "images/mukesh.jpg",
            spouse: {
                id: 19,
                name: "Mrs. Sudesh",
                dob: "dob4",
                age: "Age4",
                occupation: "House Wife & Tailor",
                photo: "images/sudesh.jpg"
            },
            children: [
                {
                    id: 20,
                    name: "Deepanshu Gautam",
                    dob: "19 Jan 2002",
                    age: "23 yrs",
                    occupation: "12th Passed",
                    photo: "images/deep.jpg",
                    birthOrder: 1
                },
                {
                    id: 21,
                    name: "Akash Gautam",
                    dob: "1 Sept 2004",
                    age: "20 yrs",
                    occupation: "12th Passed & Trader",
                    photo: "images/akash.jpg",
                    birthOrder: 2
                }
            ].sort((a, b) => a.birthOrder - b.birthOrder)
        },
        // Daughter 1 - Mrs. Sunita
        {
            id: 22,
            name: "Mrs. Sunita",
            dob: "dob1",
            age: "Age1",
            occupation: "House Wife",
            photo: "images/sunita.jpg",
            spouse: {
                id: 23,
                name: "Mr. Binod",
                dob: "dob1",
                age: "Age1",
                occupation: "Work at Office",
                photo: "images/binod.jpg"
            },
            children: [
                {
                    id: 24,
                    name: "Late Mr. Manish",
                    photo: "images/manish.jpg",
                    birthOrder: 1
                },
                {
                    id: 25,
                    name: "Himanshi",
                    dob: "dob1",
                    age: "Age1",
                    occupation: "College Student",
                    photo: "images/himanshi.jpg",
                    birthOrder: 2
                },
                {
                    id: 26,
                    name: "Payal",
                    dob: "dob2",
                    age: "Age2",
                    occupation: "College Student",
                    photo: "images/payal.jpg",
                    birthOrder: 3
                },
                {
                    id: 27,
                    name: "Aaryan",
                    dob: "19 Jan 2008",
                    age: "17 yrs",
                    occupation: "N/A",
                    photo: "images/aaryan.jpg",
                    birthOrder: 4
                }
            ].sort((a, b) => a.birthOrder - b.birthOrder)
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('family-container');
    const backBtn = document.getElementById('back-btn');
    const homeBtn = document.getElementById('home-btn');
    
    let currentMember = familyData;
    let generationStack = [];
    let lastTappedId = null;
    let lastTapTime = 0;
    let tapTimeout;

    // Initial render
    renderFamily(currentMember, false);

    function renderFamily(member, showChildren) {
        container.innerHTML = '';
        
        const generationDiv = document.createElement('div');
        generationDiv.className = 'generation';
        
        const coupleDiv = document.createElement('div');
        coupleDiv.className = 'couple';
        
        const memberElement = createMemberElement(member);
        coupleDiv.appendChild(memberElement);
        
        if (member.spouse) {
            const spouseElement = createMemberElement(member.spouse);
            coupleDiv.appendChild(spouseElement);
        }
        
        generationDiv.appendChild(coupleDiv);
        
        if (showChildren && member.children) {
            const connector = document.createElement('div');
            connector.className = 'connector';
            generationDiv.appendChild(connector);
            
            const childrenContainer = document.createElement('div');
            childrenContainer.className = 'children';
            
            member.children.forEach(child => {
                const childElement = createMemberElement(child);
                childrenContainer.appendChild(childElement);
            });
            
            generationDiv.appendChild(childrenContainer);
        }
        
        container.appendChild(generationDiv);
        setupInteractions();
        updateControls();
    }

   function createMemberElement(member) {
    const element = document.createElement('div');
    element.className = 'member';
    element.setAttribute('data-id', member.id);
    
    const img = document.createElement('img');
    img.className = 'member-photo';
    img.alt = member.name;
    
    // Try multiple path formats
    const tryImagePaths = [
        member.photo,
        member.photo.replace(/\\/g, '/'), // Fix backslashes
        'images/' + member.photo.split('/').pop(), // Try just filename in images folder
        'images/' + member.photo.split('\\').pop(), // For Windows paths
        './' + member.photo, // Try relative path
        member.photo.replace('images/', './images/') // Add relative prefix
    ];
    
    // Remove duplicate paths
    const uniquePaths = [...new Set(tryImagePaths)];
    
    // Function to try next image path
    const tryNextPath = (index = 0) => {
        if (index >= uniquePaths.length) {
            // All paths failed - show placeholder
            const initials = member.name.split(' ').map(n => n[0]).join('');
            img.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect width="150" height="150" fill="%234a6b57"/><text x="50%" y="50%" fill="white" font-family="Arial" font-size="40" text-anchor="middle" dominant-baseline="middle">${initials}</text></svg>`;
            return;
        }
        
        img.src = uniquePaths[index];
    };
    
    img.onerror = function() {
        const currentSrc = this.src;
        const currentIndex = uniquePaths.indexOf(currentSrc);
        tryNextPath(currentIndex + 1);
    };
    
    // Start trying paths
    tryNextPath();
    
    const nameElement = document.createElement('div');
    nameElement.className = 'member-name';
    nameElement.textContent = member.name;
    
    const detailsElement = document.createElement('div');
    detailsElement.className = 'member-details';
    detailsElement.innerHTML = `
        <h3>${member.name}</h3>
        ${member.dob ? `<p><strong>DOB:</strong> ${member.dob}</p>` : ''}
        ${member.age ? `<p><strong>Age:</strong> ${member.age}</p>` : ''}
        ${member.occupation ? `<p><strong>Occupation:</strong> ${member.occupation}</p>` : ''}
    `;
    
    element.appendChild(img);
    element.appendChild(nameElement);
    element.appendChild(detailsElement);
    
    return element;
}
    function setupInteractions() {
        const members = document.querySelectorAll('.member');
        
        members.forEach(member => {
            member.removeEventListener('click', handleInteraction);
            member.removeEventListener('touchend', handleInteraction);
            
            member.addEventListener('click', handleInteraction);
            member.addEventListener('touchend', handleInteraction);
        });
    }

    function handleInteraction(e) {
        if (e.type === 'touchend') e.preventDefault();
        
        const memberElement = this;
        const memberId = memberElement.getAttribute('data-id');
        const currentTime = Date.now();
        
        if (lastTappedId === memberId && (currentTime - lastTapTime) < 300) {
            clearTimeout(tapTimeout);
            lastTappedId = null;
            
            const member = findMember(familyData, parseInt(memberId));
            if (member?.children) {
                generationStack.push(currentMember);
                currentMember = member;
                renderFamily(member, true);
            }
        } else {
            lastTappedId = memberId;
            lastTapTime = currentTime;
            
            tapTimeout = setTimeout(() => {
                toggleDetails(memberElement);
                lastTappedId = null;
            }, 300);
        }
    }

    function toggleDetails(element) {
        document.querySelectorAll('.member').forEach(el => {
            if (el !== element) el.classList.remove('active');
        });
        element.classList.toggle('active');
    }

    function findMember(data, id) {
        if (data.id === id) return data;
        if (data.spouse?.id === id) return data.spouse;
        
        if (data.children) {
            for (const child of data.children) {
                const found = findMember(child, id);
                if (found) return found;
            }
        }
        return null;
    }

    function updateControls() {
        backBtn.style.display = generationStack.length > 0 ? 'block' : 'none';
        homeBtn.style.display = generationStack.length > 0 ? 'block' : 'none';
        document.getElementById('generation-indicator').textContent = 
            generationStack.length === 0 ? "Root Generation" : `Generation ${generationStack.length}`;
    }
    
    backBtn.addEventListener('click', function() {
        if (generationStack.length > 0) {
            currentMember = generationStack.pop();
            renderFamily(currentMember, false);
        }
    });
    
    homeBtn.addEventListener('click', function() {
        if (generationStack.length > 0) {
            generationStack = [];
            currentMember = familyData;
            renderFamily(currentMember, false);
        }
    });
});
