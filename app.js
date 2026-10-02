const $=s=>document.querySelector(s);
const get=(k,d=[])=>{try{return JSON.parse(localStorage.getItem('cp_'+k))??d}catch{return d}};
const set=(k,v)=>localStorage.setItem('cp_'+k,JSON.stringify(v));
const seed={
    departments: [
        {
            id: 1,
            name: 'Cardiology',
            description: 'Heart health, prevention, and cardiac care.',
            icon: '❤️',
            image: 'gettyimages-2225502372-612x612.jpg'
        },
        {
            id: 2,
            name: 'Pediatrics',
            description: 'Specialized care for infants, children, and teens.',
            icon: '🧸',
             image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
            
        },
        {
            id: 3,
            name: 'Orthopedics',
            description: 'Bone, joint, and musculoskeletal care.',
            icon: '🦴',
            image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 4,
            name: 'Neurology',
            description: 'Diagnosis and care for conditions of the nervous system.',
            icon: '🧠',
            image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 5,
            name: 'Dermatology',
            description: 'Medical care for skin, hair, and nails.',
            icon: '🩹',
            image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 6,
            name: 'General Medicine',
            description: 'Primary care, checkups, and ongoing health support.',
            icon: '🩺',
            image: 'https://images.unsplash.com/photo-1638202993928-7d113b8e4a4d?auto=format&fit=crop&w=800&q=80'
        }
    ],
    
 doctors: [
    {
        id: 1,
        name: 'Dr. Asha Rao',
        specialty: 'Cardiology',
        qualification: 'MD, DM Cardiology',
        availability: 'Mon–Fri, 9 AM–2 PM',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
    },

    {
        id: 2,
        name: 'Dr. Rahul Mehta',
        specialty: 'Pediatrics',
        qualification: 'MD Pediatrics',
        availability: 'Mon–Sat, 10 AM–4 PM',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80'
    },

    {
        id: 3,
        name: 'Dr. Neha Iyer',
        specialty: 'Orthopedics',
        qualification: 'MS Orthopedics',
        availability: 'Tue–Sat, 9 AM–1 PM',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80'
    },

    {
        id: 4,
        name: 'Dr. Vikram Shah',
        specialty: 'Neurology',
        qualification: 'DM Neurology',
        availability: 'Mon–Fri, 11 AM–5 PM',
        image: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=600&q=80'
    }
],
 appointments:[],patients:[],enquiries:[]
};
const galleryImages = [
    {
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
        title: 'Hospital Building'
    },
    {
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80',
        title: 'Modern Hospital'
    },
    {
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80',
        title: 'Patient Care'
    },
    {
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
        title: 'Medical Care'
    },
    {
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
        title: 'Medical Team'
    },
    {
        image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80',
        title: 'Healthcare Services'
    }
];

const galleryList = document.getElementById('galleryList');

if (galleryList) {
    galleryList.innerHTML = galleryImages.map(item => `
        <div class="col-sm-6 col-lg-4">
            <div class="gallery-card">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy"
                >

                <div class="gallery-caption">
                    ${item.title}
                </div>

            </div>
        </div>
    `).join('');
}
const facilities = [
    {
        name: '24/7 Emergency Care',
        description: 'Round-the-clock emergency medical services with experienced healthcare professionals.',
        icon: '🚑',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80'
    },
    {
        name: 'Modern Operation Theatres',
        description: 'Advanced operation theatres equipped with modern medical technology.',
        icon: '🏥',
        image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=900&q=80'
    },
    {
        name: 'Diagnostic Laboratory',
        description: 'Modern laboratory facilities for accurate and timely diagnostic testing.',
        icon: '🔬',
        image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80'
    },
    {
        name: 'Pharmacy',
        description: 'Convenient in-house pharmacy providing prescribed medicines and healthcare products.',
        icon: '💊',
        image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=80'
    },
    {
        name: 'Patient Rooms',
        description: 'Clean and comfortable rooms designed for patient recovery and family support.',
        icon: '🛏️',
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80'
    },
    {
        name: 'ICU & Critical Care',
        description: 'Specialized intensive care facilities for patients requiring continuous monitoring.',
        icon: '❤️',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80'
    }
];
const services = [
    {
        name: 'General Consultation',
        description: 'Professional medical consultations for diagnosis, treatment, and ongoing health management.',
        icon: '🩺',
        image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Emergency Services',
        description: 'Fast and reliable emergency medical care available around the clock.',
        icon: '🚑',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80'
    },
    {
        name: 'Health Checkups',
        description: 'Comprehensive health screenings to help identify potential health concerns early.',
        icon: '❤️',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80'
    },
    {
        name: 'Diagnostic Services',
        description: 'Modern diagnostic services and laboratory testing to support accurate medical decisions.',
        icon: '🔬',
        image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80'
    },
    {
        name: 'Pharmacy Services',
        description: 'Convenient access to prescribed medicines and essential healthcare products.',
        icon: '💊',
        image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=80'
    },
    {
        name: 'Specialist Consultation',
        description: 'Consult experienced specialists across multiple medical departments.',
        icon: '👨‍⚕️',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80'
    }
];

const serviceList = document.getElementById('serviceList');

if (serviceList) {
    serviceList.innerHTML = services.map(s => `
        <div class="col-md-6 col-lg-4">
            <div class="service-card">

                <img
                    src="${s.image}"
                    alt="${s.name}"
                    class="service-image"
                    loading="lazy"
                >

                <div class="service-content">

                    <div class="service-icon">
                        ${s.icon}
                    </div>

                    <h4>${s.name}</h4>

                    <p>
                        ${s.description}
                    </p>

                   

                </div>

            </div>
        </div>
    `).join('');
}

const facilityList = document.getElementById('facilityList');

if (facilityList) {
    facilityList.innerHTML = facilities.map(f => `
        <div class="col-md-6 col-lg-4">
            <div class="facility-card">

                <img
                    src="${f.image}"
                    alt="${f.name}"
                    class="facility-image"
                    loading="lazy"
                >

                <div class="facility-content">

                    <div class="facility-icon">
                        ${f.icon}
                    </div>

                    <h4>${f.name}</h4>

                    <p>
                        ${f.description}
                    </p>

                </div>

            </div>
        </div>
    `).join('');
}

Object.entries(seed).forEach(([k,v])=>{if(localStorage.getItem('cp_'+k)===null)set(k,v)});
let activePane='appointments';
function escapeHTML(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function notify(msg){$('#toastText').textContent=msg;bootstrap.Toast.getOrCreateInstance($('#toast')).show()}
function renderPublic(){
 const deps=get('departments'),docs=get('doctors');
 const departmentImages = {
    'Cardiology': 'gettyimages-2225502372-612x612.jpg',

    'Pediatrics': 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',

    'Orthopedics': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80',

    'Neurology': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',

    'Dermatology': 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',

    'General Medicine': 'images (5).jpg'
};

deps.forEach(d => {
    if (departmentImages[d.name]) {
        d.image = departmentImages[d.name];
    }
});
const doctorImages = {
    'Dr. Asha Rao':
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',

    'Dr. Rahul Mehta':
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',

    'Dr. Neha Iyer':
        'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80',

    'Dr. Vikram Shah':
        'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=800&q=80'
};

docs.forEach(d => {
    if (doctorImages[d.name]) {
        d.image = doctorImages[d.name];
    }
});

set('doctors', docs);

set('departments', deps);
 $('#departmentList').innerHTML = deps.map(d => `
    <div class="col-md-6 col-lg-4">
        <div class="department-card">

            <img
                src="${d.image || 'images.jpg'}"
                alt="${escapeHTML(d.name)}"
                class="department-image"
            >

            <div class="department-card-body">
                <h4>${escapeHTML(d.name)}</h4>

                <p>
                    ${escapeHTML(d.description || 'Comprehensive healthcare services from our experienced medical team.')}
                </p>
<button class="btn btn-outline-primary btn-sm mt-2 book-doctor" data-id="${d.id}">Book appointment</button>
                
            </div>

        </div>
    </div>
`).join('');
$('#doctorList').innerHTML = docs.map(d => `
    <div class="col-sm-6 col-lg-3">
        <div class="doctor-card">

            <div class="doctor-avatar">
                <img
                    src="${d.image || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'}"
                    alt="${escapeHTML(d.name)}"
                >
            </div>

            <h5>${escapeHTML(d.name)}</h5>

            <div class="specialty">
                ${escapeHTML(d.specialty)}
            </div>

            <p class="small text-secondary mt-2">
                ${escapeHTML(d.qualification || '')}
            </p>

            <p class="small text-secondary">
                Availability:
                ${escapeHTML(d.availability || 'Please enquire')}
            </p>

            <button
                class="btn btn-outline-primary btn-sm mt-2 book-doctor"
                data-id="${d.id}">
                Book appointment
            </button>

        </div>
    </div>
`).join('') || '<div class="empty">Doctors will be listed here.</div>';
 $('#apptDepartment').innerHTML='<option value="">Choose department</option>'+deps.map(d=>`<option>${escapeHTML(d.name)}</option>`).join('');
 updateDoctorOptions();
}
function updateDoctorOptions(){let dep=$('#apptDepartment').value;let docs=get('doctors').filter(d=>!dep||d.specialty===dep);$('#apptDoctor').innerHTML='<option value="">Choose doctor</option>'+docs.map(d=>`<option>${escapeHTML(d.name)}</option>`).join('')}
$('#apptDepartment').addEventListener('change',updateDoctorOptions);
document.addEventListener('click',e=>{let b=e.target.closest('.book-doctor');if(b){let d=get('doctors').find(x=>x.id==b.dataset.id);$('#apptDepartment').value=d?.specialty||'';updateDoctorOptions();$('#apptDoctor').value=d?.name||'';bootstrap.Modal.getOrCreateInstance($('#appointmentModal')).show()}});
$('#appointmentForm').addEventListener('submit',e=>{e.preventDefault();let f=new FormData(e.target),a=Object.fromEntries(f.entries());a.id=Date.now();a.status='Pending';a.createdAt=new Date().toLocaleString();let ap=get('appointments');ap.unshift(a);set('appointments',ap);let ps=get('patients');if(!ps.some(p=>p.email.toLowerCase()===a.email.toLowerCase()))ps.unshift({id:Date.now(),name:a.patient,email:a.email,phone:a.phone});set('patients',ps);e.target.reset();bootstrap.Modal.getInstance($('#appointmentModal')).hide();notify('Appointment request submitted. Status: Pending.');});
$('#contactForm').addEventListener('submit',e=>{e.preventDefault();let x=Object.fromEntries(new FormData(e.target));x.id=Date.now();x.createdAt=new Date().toLocaleString();let a=get('enquiries');a.unshift(x);set('enquiries',a);e.target.reset();notify('Thank you! Your enquiry has been recorded.')});
$('#loginForm').addEventListener('submit',e=>{e.preventDefault();let f=new FormData(e.target);if(f.get('username')==='admin'&&f.get('password')==='admin123'){bootstrap.Modal.getInstance($('#loginModal')).hide();e.target.reset();openAdmin()}else $('#loginError').textContent='Incorrect demo credentials.'});
function openAdmin(){renderAdmin();bootstrap.Modal.getOrCreateInstance($('#adminModal')).show()}
document.querySelectorAll('[data-pane]').forEach(b=>b.addEventListener('click',()=>{activePane=b.dataset.pane;renderAdmin()}));
$('#logoutBtn').addEventListener('click',()=>bootstrap.Modal.getInstance($('#adminModal')).hide());
function renderAdmin(){let data=get(activePane);let title=activePane[0].toUpperCase()+activePane.slice(1);let html='';
if(activePane==='appointments'){html=`<h5 class="mb-3">Appointment requests</h5>${data.length?`<div class="table-wrap"><table class="table table-hover align-middle"><thead><tr><th>Patient</th><th>Department / Doctor</th><th>Date</th><th>Contact</th><th>Status</th><th></th></tr></thead><tbody>${data.map(a=>`<tr><td>${escapeHTML(a.patient)}<div class="small text-secondary">${escapeHTML(a.email)}</div></td><td>${escapeHTML(a.department)}<div class="small">${escapeHTML(a.doctor)}</div></td><td>${escapeHTML(a.date)}</td><td>${escapeHTML(a.phone)}</td><td><select class="form-select form-select-sm status-select" data-status="${a.id}">${['Pending','Confirmed','Completed','Cancelled'].map(s=>`<option ${a.status===s?'selected':''}>${s}</option>`).join('')}</select></td><td><button class="btn btn-sm btn-outline-danger" data-delete="${a.id}">Delete</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">No appointments yet.</div>'}`}
if(activePane==='doctors'){html=`<h5>Doctor management</h5><form id="doctorAdd" class="admin-form row g-2"><div class="col-md-3"><input class="form-control" name="name" placeholder="Doctor name" required></div><div class="col-md-3"><select class="form-select" name="specialty" required>${get('departments').map(d=>`<option>${escapeHTML(d.name)}</option>`).join('')}</select></div><div class="col-md-3"><input class="form-control" name="qualification" placeholder="Qualification"></div><div class="col-md-3"><input class="form-control" name="availability" placeholder="Availability"></div><div class="col-12"><button class="btn btn-primary btn-sm">Add doctor</button></div></form>${data.length?`<div class="table-wrap"><table class="table"><thead><tr><th>Name</th><th>Department</th><th>Qualification</th><th>Availability</th><th></th></tr></thead><tbody>${data.map(d=>`<tr><td>${escapeHTML(d.name)}</td><td>${escapeHTML(d.specialty)}</td><td>${escapeHTML(d.qualification)}</td><td>${escapeHTML(d.availability)}</td><td><button class="btn btn-sm btn-outline-danger" data-delete="${d.id}">Delete</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">No doctors.</div>'}`}
if(activePane==='departments'){html=`<h5>Department management</h5><form id="departmentAdd" class="admin-form row g-2"><div class="col-md-4"><input class="form-control" name="name" placeholder="Department name" required></div><div class="col-md-6"><input class="form-control" name="description" placeholder="Description"></div><div class="col-md-2"><button class="btn btn-primary">Add</button></div></form>${data.length?`<div class="table-wrap"><table class="table"><thead><tr><th>Department</th><th>Description</th><th></th></tr></thead><tbody>${data.map(d=>`<tr><td>${escapeHTML(d.name)}</td><td>${escapeHTML(d.description)}</td><td><button class="btn btn-sm btn-outline-danger" data-delete="${d.id}">Delete</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">No departments.</div>'}`}
if(activePane==='patients'){html=`<h5>Registered patients</h5>${data.length?`<div class="table-wrap"><table class="table"><thead><tr><th>Name</th><th>Email</th><th>Phone</th></tr></thead><tbody>${data.map(p=>`<tr><td>${escapeHTML(p.name)}</td><td>${escapeHTML(p.email)}</td><td>${escapeHTML(p.phone)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">No registered patients.</div>'}`}
if(activePane==='enquiries'){html=`<h5>Contact enquiries</h5>${data.length?`<div class="table-wrap"><table class="table"><thead><tr><th>Name</th><th>Email</th><th>Message</th><th>Date</th><th></th></tr></thead><tbody>${data.map(x=>`<tr><td>${escapeHTML(x.name)}</td><td>${escapeHTML(x.email)}</td><td>${escapeHTML(x.message)}</td><td>${escapeHTML(x.createdAt)}</td><td><button class="btn btn-sm btn-outline-danger" data-delete="${x.id}">Delete</button></td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">No enquiries.</div>'}`}
$('#adminContent').innerHTML=html;
let df=$('#doctorAdd');if(df)df.addEventListener('submit',e=>{e.preventDefault();let x=Object.fromEntries(new FormData(df));x.id=Date.now();let a=get('doctors');a.push(x);set('doctors',a);renderPublic();renderAdmin();notify('Doctor added')});
let depf=$('#departmentAdd');if(depf)depf.addEventListener('submit',e=>{e.preventDefault();let x=Object.fromEntries(new FormData(depf));x.id=Date.now();x.icon='✚';let a=get('departments');a.push(x);set('departments',a);renderPublic();renderAdmin();notify('Department added')});
$('#adminContent').querySelectorAll('[data-status]').forEach(s=>s.addEventListener('change',()=>{let a=get('appointments');let x=a.find(z=>z.id==s.dataset.status);if(x)x.status=s.value;set('appointments',a);notify('Appointment status updated')}));
$('#adminContent').querySelectorAll('[data-delete]').forEach(b=>b.addEventListener('click',()=>{if(!confirm('Delete this record?'))return;set(activePane,get(activePane).filter(x=>x.id!=b.dataset.delete));renderPublic();renderAdmin();notify('Record deleted')}));
}
renderPublic();

// Patient portal demo authentication (browser-only; not secure for real patient data)
function userTab(mode){
 const login=mode==='login';
 $('#userLoginForm').classList.toggle('d-none',!login);
 $('#userRegisterForm').classList.toggle('d-none',login);
 $('#userLoginTab').classList.toggle('active',login);
 $('#userRegisterTab').classList.toggle('active',!login);
 $('#userLoginError').textContent='';$('#userRegisterError').textContent='';
}
$('#userLoginTab').addEventListener('click',()=>userTab('login'));
$('#userRegisterTab').addEventListener('click',()=>userTab('register'));
$('#userRegisterForm').addEventListener('submit',e=>{
 e.preventDefault();const f=Object.fromEntries(new FormData(e.target));
 const users=get('users');const email=f.email.trim().toLowerCase();
 if(users.some(u=>u.email.toLowerCase()===email)){$('#userRegisterError').textContent='An account with this email already exists.';return}
 f.id=Date.now();users.push(f);set('users',users);
 let patients=get('patients');if(!patients.some(p=>p.email.toLowerCase()===email)){patients.unshift({id:f.id,name:f.name,email:email,phone:f.phone});set('patients',patients)}
 e.target.reset();userTab('login');$('#userLoginForm [name="email"]').value=email;
 notify('Account created. Please log in.');
});
$('#userLoginForm').addEventListener('submit',e=>{
 e.preventDefault();const f=new FormData(e.target),email=String(f.get('email')).trim().toLowerCase();
 const user=get('users').find(u=>u.email.toLowerCase()===email&&u.password===f.get('password'));
 if(!user){$('#userLoginError').textContent='Email or password is incorrect. Please register if you do not have an account.';return}
 localStorage.setItem('cp_current_user',JSON.stringify({id:user.id,email:user.email,name:user.name}));
 bootstrap.Modal.getInstance($('#userLoginModal')).hide();e.target.reset();showPatientDashboard();
});
function showPatientDashboard(){
 const current=JSON.parse(localStorage.getItem('cp_current_user')||'null');if(!current)return;
 const appts=get('appointments').filter(a=>a.email.toLowerCase()===current.email.toLowerCase());
 $('#patientDashboardContent').innerHTML=`<h5>Welcome, ${escapeHTML(current.name)}</h5><p class="text-secondary">Your appointment requests and their current status are shown below.</p>${appts.length?`<div class="table-wrap"><table class="table align-middle"><thead><tr><th>Date</th><th>Department</th><th>Doctor</th><th>Status</th></tr></thead><tbody>${appts.map(a=>`<tr><td>${escapeHTML(a.date)}</td><td>${escapeHTML(a.department)}</td><td>${escapeHTML(a.doctor)}</td><td><span class="badge ${a.status==='Confirmed'?'bg-success':a.status==='Cancelled'?'bg-danger':'bg-secondary'}">${escapeHTML(a.status||'Pending')}</span></td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">You have no appointments yet. Use “Book Appointment” to request a visit.</div>'}
 <button class="btn btn-primary mt-3" id="patientBookBtn">Book an appointment</button>`;
 $('#patientBookBtn').addEventListener('click',()=>{bootstrap.Modal.getInstance($('#patientDashboardModal')).hide();bootstrap.Modal.getOrCreateInstance($('#appointmentModal')).show();});
 bootstrap.Modal.getOrCreateInstance($('#patientDashboardModal')).show();
}
$('#userLogoutBtn').addEventListener('click',()=>{localStorage.removeItem('cp_current_user');bootstrap.Modal.getInstance($('#patientDashboardModal')).hide();notify('You have logged out.')});
/* =========================================================
   PATIENT DASHBOARD
   Appointment Details, Status, Booking & Logout
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const dashboardModalElement =
        document.getElementById("patientDashboardModal");

    const dashboardContent =
        document.getElementById("patientDashboardContent");

    const bookAppointmentBtn =
        document.getElementById("dashboardBookAppointmentBtn");

    const logoutBtn =
        document.getElementById("userLogoutBtn");

    // Check required HTML elements
    if (!dashboardModalElement || !dashboardContent) {
        console.error("Patient dashboard modal not found.");
        return;
    }

    // Bootstrap modal instance
    const dashboardModal =
        bootstrap.Modal.getOrCreateInstance(dashboardModalElement);


    /* ===============================
       GET CURRENT LOGGED-IN USER
    =============================== */

    function getCurrentUser() {
        try {
            return JSON.parse(
                localStorage.getItem("cp_current_user")
            );
        } catch (error) {
            return null;
        }
    }


    /* ===============================
       GET SAVED APPOINTMENTS
    =============================== */

    function getAppointments() {
        try {
            return JSON.parse(
                localStorage.getItem("appointments")
            ) || [];
        } catch (error) {
            return [];
        }
    }


    /* ===============================
       ESCAPE HTML
    =============================== */

    function escapeHTML(value) {
        return String(value ?? "").replace(/[&<>"']/g, function (char) {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

            return entities[char];
        });
    }


    /* ===============================
       STATUS BADGE
    =============================== */

    function getStatusBadge(status) {

        const normalizedStatus =
            String(status || "Pending").toLowerCase();

        if (normalizedStatus === "confirmed") {
            return `
                <span class="badge bg-success">
                    Confirmed
                </span>
            `;
        }

        if (normalizedStatus === "cancelled") {
            return `
                <span class="badge bg-danger">
                    Cancelled
                </span>
            `;
        }

        return `
            <span class="badge bg-warning text-dark">
                Pending
            </span>
        `;
    }


    /* ===============================
       SHOW PATIENT DASHBOARD
    =============================== */

    function showPatientDashboard() {

        const user = getCurrentUser();

        if (!user || !user.email) {
            alert("Please login to view your patient dashboard.");
            return;
        }

        const appointments = getAppointments();

        // Show only appointments belonging to the logged-in user
        const patientAppointments = appointments.filter(function (appointment) {

            return String(appointment.email || "").toLowerCase() ===
                String(user.email).toLowerCase();

        });

        let html = `
            <div class="patient-welcome-card">
                <div class="patient-avatar">
                    <i class="bi bi-person-fill"></i>
                </div>

                <div>
                    <h4>Welcome, ${escapeHTML(user.name || "Patient")}!</h4>
                    <p>${escapeHTML(user.email)}</p>
                </div>
            </div>

            <div class="patient-stats">
                <div class="patient-stat-card">
                    <h3>${patientAppointments.length}</h3>
                    <p>Total Appointments</p>
                </div>

                <div class="patient-stat-card">
                    <h3>
                        ${patientAppointments.filter(a =>
                            String(a.status || "Pending").toLowerCase() === "pending"
                        ).length}
                    </h3>
                    <p>Pending</p>
                </div>

                <div class="patient-stat-card">
                    <h3>
                        ${patientAppointments.filter(a =>
                            String(a.status || "").toLowerCase() === "confirmed"
                        ).length}
                    </h3>
                    <p>Confirmed</p>
                </div>
            </div>

            <h5 class="patient-section-title">
                <i class="bi bi-calendar-check"></i>
                My Appointments
            </h5>
        `;


        /* ===============================
           NO APPOINTMENTS
        =============================== */

        if (patientAppointments.length === 0) {

            html += `
                <div class="no-appointments">
                    <i class="bi bi-calendar-x"></i>

                    <h5>No Appointments Found</h5>

                    <p>
                        You haven't booked any appointments yet.
                    </p>

                    <button class="btn btn-primary"
                            id="emptyBookAppointmentBtn">
                        <i class="bi bi-calendar-plus"></i>
                        Book Your First Appointment
                    </button>
                </div>
            `;

        } else {

            /* ===============================
               APPOINTMENT CARDS
            =============================== */

            html += `<div class="patient-appointments-list">`;

            patientAppointments.forEach(function (appointment) {

                const appointmentDate =
                    appointment.date
                        ? escapeHTML(appointment.date)
                        : "Not specified";

                const doctor =
                    escapeHTML(appointment.doctor || "Not assigned");

                const department =
                    escapeHTML(appointment.department || "Not specified");

                const statusBadge =
                    getStatusBadge(appointment.status);

                html += `
                    <div class="patient-appointment-card">

                        <div class="appointment-card-header">
                            <h6>
                                <i class="bi bi-calendar-event"></i>
                                Appointment
                            </h6>

                            ${statusBadge}
                        </div>

                        <div class="appointment-details-grid">

                            <div class="appointment-detail">
                                <span>Appointment ID</span>
                                <strong>
                                    ${escapeHTML(appointment.id || "N/A")}
                                </strong>
                            </div>

                            <div class="appointment-detail">
                                <span>Date</span>
                                <strong>${appointmentDate}</strong>
                            </div>

                            <div class="appointment-detail">
                                <span>Department</span>
                                <strong>${department}</strong>
                            </div>

                            <div class="appointment-detail">
                                <span>Doctor</span>
                                <strong>${doctor}</strong>
                            </div>

                        </div>

                    </div>
                `;
            });

            html += `</div>`;
        }

        dashboardContent.innerHTML = html;


        /* ===============================
           EMPTY STATE BOOK BUTTON
        =============================== */

        const emptyBookBtn =
            document.getElementById("emptyBookAppointmentBtn");

        if (emptyBookBtn) {
            emptyBookBtn.addEventListener(
                "click",
                openAppointmentForm
            );
        }

        dashboardModal.show();
    }


    /* ===============================
       OPEN APPOINTMENT FORM
    =============================== */

    function openAppointmentForm() {

        dashboardModal.hide();

        // Allow dashboard modal to close before opening appointment modal
        setTimeout(function () {

            const appointmentModalElement =
                document.getElementById("appointmentModal");

            if (appointmentModalElement) {

                const appointmentModal =
                    bootstrap.Modal.getOrCreateInstance(
                        appointmentModalElement
                    );

                appointmentModal.show();

            } else {

                const appointmentSection =
                    document.getElementById("appointment");

                if (appointmentSection) {
                    appointmentSection.scrollIntoView({
                        behavior: "smooth"
                    });
                } else {
                    alert("Appointment form was not found.");
                }
            }

        }, 300);
    }


    /* ===============================
       BOOK APPOINTMENT BUTTON
    =============================== */

    if (bookAppointmentBtn) {
        bookAppointmentBtn.addEventListener(
            "click",
            openAppointmentForm
        );
    }


    /* ===============================
       LOGOUT
    =============================== */

    if (logoutBtn) {

        logoutBtn.addEventListener("click", function () {

            const confirmLogout =
                confirm("Are you sure you want to logout?");

            if (!confirmLogout) {
                return;
            }

            // Clear the current demo session
            localStorage.removeItem("cp_current_user");

            dashboardModal.hide();

            alert("You have been logged out successfully.");

            // Update login/logout buttons if your website has them
            const userLoginBtn =
                document.getElementById("userLoginBtn");

            if (userLoginBtn) {
                userLoginBtn.style.display = "inline-block";
            }

            const userDashboardBtn =
                document.getElementById("userDashboardBtn");

            if (userDashboardBtn) {
                userDashboardBtn.style.display = "none";
            }

        });
    }


    /* ===============================
       OPEN DASHBOARD FROM LOGIN BUTTON
    =============================== */

    const userDashboardBtn =
        document.getElementById("userDashboardBtn");

    if (userDashboardBtn) {

        userDashboardBtn.addEventListener("click", function (event) {
            event.preventDefault();
            showPatientDashboard();
        });
    }


    /* ===============================
       OPTIONAL: OPEN DASHBOARD AFTER LOGIN
    =============================== */

    window.showPatientDashboard = showPatientDashboard;

});

