
var students = [
    {
        Name: 'Chithirai vel S',
        Fresher: 'Fresher From VEMBAR ,',
        Location: 'Thoothukudi ,',
        image: '7.png',
        Git: 'https://github.com/chithiraivel',
        Resume: 'Chithiraivel.pdf',
        PrimarySkills: 'Html,Css,JavaScript,React JS',
        SecondarySkiills: 'Visual Studio Code,Git',
        ExpectedSalary: '2.5L',
        Education: {

            degree: 'BE',
            hsc: 'HSC-State Board-2016-60% .',
            sslc: 'SSLC-StateBoard-2014-80% .'
        },
        AvailabilityToJoin: 'Immediate'
    },
    {
        Name: 'Rahul',
        Fresher: 'Fresher From VEMBAR ,',
        Location: 'TENKASI ,',
        image: '8.png',
        Git: 'https://github.com/chithiraivel',
        Resume: 'Chithiraivel.pdf',
        PrimarySkills: 'Html,Css,JavaScript,React JS',
        SecondarySkiills: 'Visual Studio Code,Git',
        ExpectedSalary: '2.5L',
        Education: {

            degree: 'BE',
            hsc: 'HSC-State Board-2016-60% .',
            sslc: 'SSLC-StateBoard-2014-80% .'
        },
        AvailabilityToJoin: 'Immediate'
    },
    {
        Name: 'Muthu Kumar',
        Fresher: 'Fresher From VEMBAR ,',
        Location: 'TENKASI ,',
        image: '4.jfif',
        Git: 'https://github.com/chithiraivel',
        Resume: 'Chithiraivel.pdf',
        PrimarySkills: 'Html,Css,JavaScript,React JS',
        SecondarySkiills: 'Visual Studio Code,Git',
        ExpectedSalary: '2.5L',
        Education: {

            degree: 'BE',
            hsc: 'HSC-State Board-2016-60% .',
            sslc: 'SSLC-StateBoard-2014-80% .'
        },
        AvailabilityToJoin: 'Immediate'
    },
    {
        Name: 'Leo Wilson',
        Fresher: 'Fresher From VEMBAR ,',
        Location: 'Surandai ,',
        image: '2.jfif',
        Git: 'https://github.com/chithiraivel',
        Resume: 'Chithiraivel.pdf',
        PrimarySkills: 'Html,Css,JavaScript,React JS',
        SecondarySkiills: 'Visual Studio Code,Git',
        ExpectedSalary: '2.5L',
        Education: {

            degree: 'BCA',
            hsc: 'HSC-State Board-2016-60% .',
            sslc: 'SSLC-StateBoard-2014-80% .'
        },
        AvailabilityToJoin: 'Immediate'
    },
    {
        Name: 'Alphanse',
        Fresher: 'Fresher From VEMBAR ,',
        Location: 'Alangulam ,',
        image: '9.jfif',
        Git: 'https://github.com/chithiraivel',
        Resume: 'Chithiraivel.pdf',
        PrimarySkills: 'Html,Css,JavaScript,React JS',
        SecondarySkiills: 'Visual Studio Code,Git',
        ExpectedSalary: '2.5L',
        Education: {

            degree: 'BE',
            hsc: 'HSC-State Board-2016-60% .',
            sslc: 'SSLC-StateBoard-2014-80% .'
        },
        AvailabilityToJoin: 'Immediate'
    },
    {
        Name: 'Mari Selvam',
        Fresher: 'Fresher From VEMBAR ,',
        Location: 'Alangulam ,',
        image: '6.png',
        Git: 'https://github.com/chithiraivel',
        Resume: 'Chithiraivel.pdf',
        PrimarySkills: 'Html,Css,JavaScript,React JS',
        SecondarySkiills: 'Visual Studio Code,Git',
        ExpectedSalary: '2.5L',
        Education: {

            degree: 'BE',
            hsc: 'HSC-State Board-2016-60% .',
            sslc: 'SSLC-StateBoard-2014-80% .'
        },
        AvailabilityToJoin: 'Immediate'
    },

]




var talenzPar = document.createElement('div');
talenzPar.className = 'talenz'
var talenz = document.createElement('div');
var talenzImg = document.createElement('img');
talenzImg.src = 'logo.png'
talenz.append(talenzImg);

var hire = document.createElement('div');
var hireh1 = document.createElement('h1');
hireh1.className = 'hireh1'
hireh1.textContent = 'Hire Our Candidates'
hire.append(hireh1);
talenzPar.append(talenz, hire);



var source1 = document.createElement('div');
source1.className = 'source1'
var sourceh1 = document.createElement('h1');
sourceh1.className = 'sourceh1'
sourceh1.textContent = 'Source our Active IT Job Seekers'
var sourceh2 = document.createElement('button');
sourceh2.className = 'sourceh2'
sourceh2.textContent = 'Hire Our Candidates';
source1.append(sourceh1, sourceh2)


var active = document.createElement('div');
active.className = 'active'

var select = document.createElement('select');
select.setAttribute('onchange', 'select1(this.value)')
var option1 = document.createElement('option');
option1.textContent = 'BE';
var option2 = document.createElement('option');
option2.textContent = 'BCA'
select.append(option1, option2);

var activeh1 = document.createElement('h1');
activeh1.className = 'activeh1'
activeh1.textContent = 'Active IT Jobseekers'
active.append(activeh1);

document.body.append(talenzPar, source1, select, active);






var b=document.createElement('div');

function employes(data) {


    var a = document.createElement('div');
    a.className = 'a1'
    var parent = document.createElement('div');
    var secondary = document.createElement('div')
    secondary.className = 'secondary'
    var photo = document.createElement('div')
    var image1 = document.createElement('img');
    image1.src = data.image;
    image1.className = 'image'
    photo.append(image1);


    var name = document.createElement('div')
    name.className = 'name'
    var nameh1 = document.createElement('h1');
    nameh1.textContent = data.Name;
    var namep1 = document.createElement('p');
    namep1.textContent = data.Fresher
    var namep2 = document.createElement('p');
    namep2.textContent = data.Location;
    name.append(nameh1, namep1, namep2);
    var icon = document.createElement('div')
    icon.className = 'icon'
    var i1 = document.createElement('i');
    i1.className = 'fa fa-github'
    var a1 = document.createElement('a');
    a1.href = data.Git
    a1.target = '_blank'
    a1.append(i1)


    var a2 = document.createElement('a');
    a2.href = data.Resume;
    a2.target = '_blank'
    var i2 = document.createElement('i');
    i2.className = 'fa fa-file'
    a2.append(i2)
    icon.append(a1, a2);
    secondary.append(photo, name, icon);




    var secondaryDiv = document.createElement('div');
    secondaryDiv.className = 'secondaryDiv'
    var childDiv = document.createElement('div');
    var childh2 = document.createElement('h2');
    childh2.textContent = 'Primary Skills'
    var childp = document.createElement('p');
    childp.className = 'secondarySkil'
    childp.textContent = data.PrimarySkills;

    var childh3 = document.createElement('h2');
    childh3.textContent = 'Secondary Skills'
    var childp1 = document.createElement('p');
    childp1.className = 'secondarySkil'
    childp1.textContent = data.SecondarySkiills;

    var childh4 = document.createElement('h2');
    childh4.textContent = 'Expected Salary'
    childh4.className = 'secondarySkil'
    var childp2 = document.createElement('p');
    childp2.textContent = data.ExpectedSalary;
    childp2.className = 'secondarySkil'
    childDiv.append(childh2, childp, childh3, childp1, childh4, childp2);

    var childDiv2 = document.createElement('div');
    var childh5 = document.createElement('h2');
    childh5.textContent = 'Education'
    childh5.className = 'secondarySkil'
    var childp3 = document.createElement('p');
    childp3.textContent = data.Education.degree;
    childp3.className = 'secondarySkil'
    var hsc = document.createElement('p');
    hsc.className = 'secondarySkil'
    hsc.textContent = data.Education.hsc;
    var sslc = document.createElement('p');
    sslc.className = 'secondarySkil'
    sslc.textContent = data.Education.sslc;

    var childh6 = document.createElement('h2');
    childh6.textContent = 'Availability to join'
    var childp4 = document.createElement('p');
    childp4.textContent = data.AvailabilityToJoin;
    childp4.className = 'secondarySkil'
    childDiv2.append(childh5, childp3, hsc, sslc, childh6, childp4);

    secondaryDiv.append(childDiv, childDiv2);

    parent.append(secondary, secondaryDiv);
    a.append(parent)
    b.append(a)
    document.body.append(b);
}
students.forEach(employes)



function select1(data) {
b.innerHTML=''
   students.forEach( function (data1){
        if(data == data1.Education.degree){
            employes(data1);
            console.log(data);
        } 
   })
  
}
