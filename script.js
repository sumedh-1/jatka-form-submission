// https://act.jhatkaa.org/campaigns/lift-the-ban-on-carpooling-services-in-bengaluru?utm_source=push&utm_medium=push&utm_campaign=carpool-policy
// Open the above URL in browser and open developer tools, copy paste the below code and hit enter.
// Note: Please change while condition from 10 to 1Lakh.

function getRandomNumber(lengthArray) {
  return Math.floor(Math.random() * lengthArray);
}

const names = {
  fNames: [
    'Saanvi',
    'Anya',
    'Aadhya',
    'Aaradhya',
    'Ananya',
    'Pari',
    'Anika',
    'Navya',
    'Angel',
    'Diya',
    'Myra',
    'Sara',
    'Iraa',
    'Ahana',
    'Anvi',
    'Prisha',
    'Riya',
    'Aarohi',
    'Anaya',
    'Akshara',
    'Eva',
    'Shanaya',
    'Kyra',
    'Siya',
    'Aarav',
    'Vihaan',
    'Vivaan',
    'Ananya',
    'Diya',
    'Advik',
    'Kabir',
    'Anaya',
    'Aarav',
    'Vivaan',
    'Aditya',
    'Vivaan',
    'Vihaan',
    'Arjun',
    'Vivaan',
    'Reyansh',
    'Mohammed',
    'Sai',
    'Arnav',
    'Aayan',
    'Krishna',
    'Ishaan',
    'Shaurya',
    'Atharva',
    'Advik',
    'Pranav',
    'Advaith',
    'Aaryan',
    'Dhruv',
    'Kabir',
    'Ritvik',
    'Aarush',
    'Kian',
    'Darsh',
    'Veer',
  ],
  surnames: [
    'Bedi',
    'Gandhi',
    'Parekh',
    'Kohli',
    'Ahluwalia',
    'Chandra',
    'Jha',
    'Khanna',
    'Bajwa',
    'Chawla',
    'Lal',
    'Anand',
    'Gill',
    'Chakrabarti',
    'Dubey',
    'Kapoor',
    'Khurana',
    'Modi',
    'Kulkarni',
    'Khatri',
    'Kaur',
    'Dhillon',
    'Kumar',
    'Gupta',
    'Naidu',
    'Das',
    'Jain',
    'Chowdhury',
    'Dalal',
    'Thakur',
    'Gokhale',
    'Apte',
    'Sachdev',
    'Mehta',
    'Ganguly',
    'Bhasin',
    'Mannan',
    'Ahuja',
    'Singh',
    'Bakshi',
    'Basu',
    'Ray',
    'Mani',
    'Datta',
    'Balakrishna',
    'Biswas',
    'Laghari',
    'Malhotra',
    'Dewan',
    'Purohit',
  ],
};

function getMailId(firstname, lastname, differentiator) {
  return firstname + '.' + lastname + differentiator + '@gmail.com';
}

function getPhoneNumber(differentiator) {
  return (
    differentiator + Math.floor(Math.random() * (100000 - 999999) + 999999)
  );
}

const blorePincodes = [
  '560004',
  '560034',
  '560007',
  '560092',
  '560024',
  '560047',
  '560043',
  '560017',
  '560001',
  '560025',
  '560049',
  '560001',
  '560064',
  '560092',
  '560025',
  '560064',
  '560001',
  '560045',
  '560036',
  '560037',
  '560001',
  '560024',
  '560001',
  '560048',
  '560008',
  '560038',
  '560094',
  '560064',
  '560043',
  '560005',
  '560066',
  '560084',
  '560064',
  '560092',
  '560016',
  '560037',
  '560001',
  '560084',
  '560001',
  '560033',
  '560033',
  '560049',
  '560045',
  '560017',
  '560001',
  '560032',
  '560001',
  '560066',
  '560045',
  '560016',
  '560037',
  '560025',
  '560008',
  '560049',
  '560006',
  '560045',
  '560001',
  '560064',
  '560064',
  '560037',
  '562106',
  '562106',
  '562107',
  '562106',
  '562107',
  '562125',
  '562125',
  '562106',
  '562106',
  '562106',
  '562106',
  '562106',
  '562125',
  '562106',
  '562107',
  '562107',
  '562106',
  '562125',
  '562106',
  '562106',
  '562106',
  '562107',
  '560093',
  '560001',
  '560071',
  '560008',
  '560032',
  '560016',
  '560063',
  '560045',
  '560003',
  '560064',
  '560086',
  '560073',
  '560002',
  '560009',
  '560079',
  '560086',
  '560046',
  '562157',
  '560010',
  '560040',
  '560097',
  '560057',
  '560005',
  '560065',
  '560021',
  '560022',
  '560013',
  '560013',
  '560051',
  '560104',
  '560043',
  '560010',
  '560006',
  '560014',
  '560013',
  '560013',
  '560015',
  '560079',
  '560009',
  '560020',
  '560043',
  '560015',
  '560079',
  '560096',
  '560077',
  '560054',
  '560023',
  '560086',
  '560003',
  '560055',
  '560033',
  '560054',
  '560055',
  '560054',
  '560025',
  '560072',
  '560073',
  '560096',
  '560021',
  '560003',
  '560058',
  '560058',
  '560058',
  '560094',
  '560010',
  '560010',
  '560010',
  '560064',
  '560021',
  '560080',
  '560092',
  '560012',
  '560020',
  '560064',
  '560042',
  '560021',
  '560084',
  '560009',
  '560003',
  '560052',
  '560003',
  '560097',
  '560040',
  '560040',
  '560091',
  '560003',
  '560064',
  '560022',
  '560022',
  '560030',
  '560007',
  '560050',
  '560026',
  '560002',
  '560053',
  '560085',
  '560050',
  '560002',
  '560002',
  '560076',
  '560083',
  '560026',
  '560002',
  '560103',
  '560049',
  '560056',
  '560068',
  '560026',
  '560002',
  '560018',
  '560018',
  '560053',
  '560061',
  '560050',
  '560026',
  '560067',
  '560029',
  '560062',
  '560062',
  '560100',
  '560019',
  '560019',
  '560085',
  '560026',
  '560026',
  '560026',
  '560087',
  '560068',
  '560085',
  '560030',
  '560102',
  '560076',
  '560066',
  '560038',
  '560085',
  '560078',
  '560041',
  '560070',
  '560011',
  '560078',
  '560067',
  '560067',
  '560067',
  '560085',
  '560098',
  '560034',
  '560062',
  '560034',
  '560034',
  '560095',
  '560036',
  '560078',
  '560074',
  '560004',
  '560011',
  '560068',
  '560048',
  '560056',
  '560037',
  '560004',
  '560067',
  '560076',
  '560076',
  '560049',
  '560099',
  '560087',
  '560067',
  '560019',
  '560002',
  '560039',
  '560002',
  '560075',
  '560070',
  '560087',
  '560004',
  '560098',
  '560059',
  '560067',
  '560027',
  '560004',
  '560027',
  '560002',
  '560034',
  '560050',
  '560061',
  '560029',
  '560041',
  '560028',
  '560056',
  '560087',
  '560078',
  '560017',
  '560049',
  '560004',
  '560018',
  '560047',
  '560066',
  '560027',
  '560070',
  '560078',
  '560024',
  '562130',
  '560070',
  '560069',
  '562149',
  '562157',
  '562149',
  '562157',
  '562157',
  '562149',
  '562157',
  '562157',
  '562130',
  '562149',
  '562130',
  '562130',
  '560081',
  '560091',
  '560089',
  '560090',
  '560073',
  '560091',
  '560089',
  '560088',
  '560089',
  '560091',
  '560073',
  '560089',
  '560090',
  '560090',
  '560062',
  '560083',
  '560068',
  '560076',
  '560082',
  '560099',
  '560035',
  '560060',
  '560083',
  '560099',
  '560099',
  '560082',
  '560083',
  '560060',
  '560060',
  '560060',
  '560060',
  '560083',
  '560068',
  '560082',
  '560060',
  '560062',
  '560082',
  '560062',
  '560082',
  '560082',
  '562130',
  '562110',
  '562110',
  '562110',
  '562110',
  '562110',
  '562110',
  '562135',
  '562110',
  '562110',
  '562110',
  '562135',
  '562110',
  '562110',
  '562110',
  '562110',
  '562135',
  '562135',
  '562110',
  '562110',
  '562135',
  '562110',
  '562110',
  '562110',
  '562110',
  '562110',
  '561205',
  '561204',
  '561204',
  '561203',
  '561204',
  '561203',
  '561205',
  '561205',
  '561203',
  '561204',
  '561204',
  '561204',
  '561204',
  '561203',
  '561205',
  '561204',
  '561204',
  '561204',
  '561204',
  '561204',
  '561205',
  '561203',
  '561203',
  '561203',
  '561203',
  '561203',
  '561204',
  '561203',
  '561203',
  '561203',
  '561203',
  '561203',
  '561203',
  '561203',
  '561203',
  '561203',
  '561203',
  '561203',
  '561203',
  '562122',
  '562129',
  '562129',
  '562129',
  '562122',
  '562114',
  '562114',
  '562114',
  '562122',
  '562114',
  '562114',
  '562129',
  '562114',
  '562114',
  '562122',
  '562114',
  '562114',
  '562114',
  '562122',
  '562114',
  '562114',
  '562114',
  '562122',
  '562122',
  '562129',
  '562122',
  '562129',
  '562122',
  '562114',
  '562119',
  '561101',
  '561201',
  '562131',
  '562127',
  '562131',
  '562127',
  '562131',
  '562131',
  '562131',
  '562127',
  '561101',
  '562131',
  '561101',
  '562127',
  '562127',
  '562127',
  '561101',
  '562127',
  '561101',
  '562127',
  '562127',
  '562131',
  '561101',
  '562127',
  '561101',
  '562131',
  '562127',
  '562127',
  '562123',
  '562123',
  '562123',
  '562111',
  '562111',
  '562111',
  '562123',
  '562123',
  '562111',
  '562111',
  '562132',
  '562123',
  '562111',
  '562123',
  '562123',
  '562123',
  '562111',
  '562132',
  '562111',
  '562111',
  '562123',
  '562123',
  '562123',
  '562123',
  '562123',
  '562123',
  '562132',
  '562111',
  '562123',
  '562123',
  '562111',
  '562123',
  '562132',
  '562132',
  '562111',
  '562123',
  '562130',
  '562130',
  '562123',
  '562132',
  '562111',
  '562123',
];

function getRandomUser() {
  let formData = new FormData();
  const fName = names.fNames[getRandomNumber(names.fNames.length)];
  const lName = names.surnames[getRandomNumber(names.surnames.length)];
  const json = {
    rthing: 'rsign',
    'rsign[source_id]': 52830,
    consent_config_digest: 'd41d8cd98f00b204e9800998ecf8427e',
    'rsign[postcode]': blorePincodes[getRandomNumber(blorePincodes.length)],
    'rsign[firstname]': fName,
    'rsign[lastname]': lName,
    'rsign[country]': 'in',
    'rsign[phone]': getPhoneNumber(Math.random().toFixed(4) * 100),
    'rsign[email]': getMailId(lName, fName, Math.random().toFixed(3) * 100),
    'rsign[whatsapp_subscription]': 0,
  };
  for (var key in json) {
    formData.append(key, json[key]);
  }
  return formData;
}

const jatkaUrl = 'https://act.jhatkaa.org/campaigns/726';
let i = 0;
while (i < 10) { // run it for 10 times (make this as 1lakh times)
  call(i);
  i++;
}
function call(i) {
  setTimeout(function () {
    fetch(jatkaUrl, {
      method: 'post',
      body: getRandomUser(),
    })
      .then((res) => {
        i++;
        console.log('submitting form count: ', i);
        console.log('res: i ', res);
      })
      .catch((err) => console.log(err));
  }, 100 * i);
}
