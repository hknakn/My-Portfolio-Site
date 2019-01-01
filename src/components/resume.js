import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://media.licdn.com/dms/image/C4D03AQHFWxpzot2tfg/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=3uoPP7HJqBa8DH61XZq5qZJkAArS0RMubJJ8lHtcQj8"
                                alt="avatar"
                                style={{ paddingTop: '3.5em' }}
                            />
                        </div>

                        <h2 className="name">Hakan Akın</h2>
                        <h4 className="title">Yazılım Geliştirici</h4>
                        <hr className="resume-hr-small" />
                        <p className="info">Merhaba ben Hakan, 1997 İstanbul doğumluyum. Bilgisayar mühendisliği öğrencisiyim ve yazılımla ilgilenmeyi seviyorum. Şuan Dataliva adlı bir şirkette yazılım geliştirici olarak çalışıyorum. Genel olarak kodlarla uğraşmayı ve dizi izlemeyi seviyorum. Kendimi geliştirebilmek, öğrendiklerimi paylaşmak ve projelerimi yayınlamak için bu platformu kullanıyorum.</p>
                        <hr className="resume-hr-small" />
                        <h5 className="resume-h5">Email</h5>
                        <p className="info">cehakanakin@gmail.com</p>
                        <hr className="resume-hr-small" />

                    </Cell>

                    <Cell className="resume-right-col" col={8}>

                        <h2 className="title">Eğitim</h2>
                        <Education
                            startYear={2015}
                            endYear="Devam ediyor"
                            schoolName="Altınbaş Üniversitesi"
                            schoolDescription="Bilgisayar Mühendisliği bölümünü okuyorum." />

                        <Education
                            startYear={2011}
                            endYear={2015}
                            schoolName="Gazi Anadolu Lisesi"
                            schoolDescription="" />

                        <hr className="resume-hr-tall" />

                        <h2 className="title">Deneyimler</h2>
                        <Experience
                            startYear={2018}
                            endYear="Devam Ediyor"
                            companyName="Dataliva"
                            title="Ürün Geliştirme Uzman Yardımcısı"
                            jobDescription="C#, VB.Net, SQL Server, DevExpress kullanarak bütçe planlama ve karar destek mekanizması üzerine çalışıyorum." />

                        <Experience
                            startYear="06 / 2017"
                            endYear="01 / 2018"
                            companyName="Koton"
                            title="Kasiyer"
                            jobDescription="Bir koton mağazasında kasiyer olarak çalıştım." />

                        <Experience
                            startYear="01 / 2016"
                            endYear="11 / 2016"
                            companyName="Vodafone"
                            title="Satış Danışmanı"
                            jobDescription="Bir Vodafone şubesinde satış danışmanı olarak görev aldım. Telefon, aksesuar satışından sorumluydum." />

                        <Experience
                            startYear="05 / 2013"
                            endYear="09 / 2013"
                            companyName="Burger King"
                            title="Kasiyer"
                            jobDescription="Bir Burger King şubesinde kasiyer olarak görev aldım." />

                        <hr className="resume-hr-tall" />

                        <h2 className="title">Skills</h2>
                        <Skills
                            skill="VB.NET"
                            progress={50}
                        />

                        <Skills
                            skill="SQL Server"
                            progress={40}
                        />

                        <Skills
                            skill="Python"
                            progress={70}
                        />

                        <Skills
                            skill="JavaScript"
                            progress={80}
                        />

                    </Cell>

                </Grid>
            </div>
        )
    }
}

function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    return age;
}

export default Resume;