import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust the path as needed
const baseUrl = process.env.NEXT_PUBLIC_PAGE_API; // Load from .env
// Define the API call
export const fetchData = createAsyncThunk('data/fetchData', async (pageSlug: string) => {

  if(pageSlug==="home"){

    const newArray = {
      "slug": "home",
      "meta": {
        "title": "Test Us",
        "description": "Learn more Test us on this page.",
        "keywords": ""
      },
      "content": {
        "section2": {
          "status": "true",
          "photo": "/theme_images/home-banner2.jpg"
        },
        "section3": {
          "status": "true",
          "photo": "/theme_images/Scaling-Your-Small-Business-with-Cost-Effective-Virtual-Bookkeeping-2.png",
          "title": "Affordable and Reliable Online Bookkeeping Slutions",
          "description": "Let us handle your bookkeeping so you can focus on growing your business. Whether you’re a small business owner or an entrepreneur, our affordable online bookkeeping service provides professional support tailored to your needs."
        },
        "section4": [
          {
            "id": "1",
            "title": "SHARE YOUR REQUIREMENT",
            "description": "Share which skillset resource (Guru) you want to hire. Schedule a meeting with business manager."
          },
          {
            "id": "2",
            "title": "REVIEW THE EXPERT'S",
            "description": "We will share details of resources matching your required skillset within 1 day to 1 week."
          },
          {
            "id": "3",
            "title": "READY TO GO",
            "description": "We will share reasonable hourly or monthly fixed quote for ready to start resources."
          }
        ],
        "section5": {
          "status": "true",
          "photo": "/theme_images/home-banner2.jpg",
          "title": "Expertise in Leading Accounting Software Solutions",
          "link": "/contact-us/",
          "linkText": "Contact Us",
          "description": "<li>QuickBooks Accounting Expert</li> <li>ZohoBooks Accounting Expert</li> <li>Xero Accounting Expert & More</li>"
        },
        "section6": {
          "status": "true",
          "title": "Hires Virtual Remote 'Experts Bookkeeper'",
          "box": [
            {
              "link": "/contact-us/",
              "linkText": "Hire Now",
              "title": "Comprehensive Bookkeeping",
              "description": "We provide meticulous bookkeeping services, including expense tracking, invoice management, and account reconciliation, ensuring your financial records are always accurate and up-to-date."
            },
            {
              "title": "Tax Preparation and Planning",
              "link": "/contact-us/",
              "linkText": "Hire Now",
              "description": "We navigate the complexities of tax regulations to prepare and file your taxes efficiently, maximizing deductions and minimizing liabilities for your business."
            },
            {
              "link": "/contact-us/",
              "linkText": "Hire Now",
              "title": "Payroll Management",
              "description": "Our experts handle all aspects of payroll, from calculating wages to managing tax deductions, ensuring your employees are paid accurately & on time, while keeping compliance in check."
            },
            {
              "link": "/contact-us/",
              "linkText": "Hire Now",
              "title": "Financial Reporting",
              "description": "Receive detailed financial reports tailored to your business needs, including profit and loss statements and cash flow analysis, providing you with insights to drive informed decisions."
            }
          ]
        },
        "section7": {
          "status": "true",
          "title": "Accounting Services",
          "link": "/accounting-services/",
          "linkText": "View All",
          "box": [
            {
              "link": "/accountant-for-doctors/",
              "linkText": "More",
              "title": "Accountant for doctor",
              "description": "At Virtual Remote Bookkeeper, we specialize in providing top-notch accounting and bookkeeping services tailored for doctors and their clinics."
            },
            {
              "title": "Accountant for therapist",
              "link": "/accountant-for-therapist/",
              "linkText": "More",
              "description": "Our specialized accounting services for therapists and their clinics offer a seamless way to manage your finances while staying focused on your clients."
            }
           
          ]
        },
        "section8": {
          "status": "true",
          "title": "Our Bookkeeping Services: Accurate, Reliable, and Error-Free Every Time",
           "description": "With Our Virtual Remote Bookkeeper Experts, you can trust that each service is delivered with professionalism, accuracy, and a focus on your unique business needs.",
           "photo":"/theme_images/Why-Single-Business-Owners-Are-Switching-to-Virtual-Bookkeeping-Services.png"
        },
        "section9": {
          "status": "true",
          "title": "Bookkeeping Services for Professionals",
          "link": "/professionals-bookkeeping-services/",
          "linkText": "View All",
          "box": [
            {
              "link": "/bookkeeping-for-doctors/",
              "linkText": "More",
              "title": "Bookkeeping services for Doctor",
              "description": "At VirtualRemoteBookkeeper, we specialize in providing high-quality, cost-effective bookkeeping services designed to meet the unique needs of small businesses, professionals, and entrepreneurs."
            },
            {
              "title": "Bookkeeping services for Therapist",
              "link": "/bookkeeping-for-therapist/",
              "linkText": "More",
              "description": "Streamline your therapy practice’s finances with Virtual Remote Bookkeeper’s expert services at just $100/month or $4/hour. Our certified and professional bookkeepers specialize in managing client."
            }
           
          ]
        },
        "section10": {
          "status": "true",
          "title": "FAQ",
        
          "box": [
            {
              "title": "What services does Virtual Remote Bookkeeper offer?",
              "description": "<p>We provide end-to-end bookkeeping and accounting services, including:</p><ul><li>Zoho Books, Xero, QuickBooks, FreshBooks, MYOB, Wave, Sage, and other software.</li><li>Daily bookkeeping and transaction management.</li><li>Accounts payable and receivable.</li><li>Financial reporting and analysis.</li><li>Bank and credit card reconciliation.</li><li>Payroll processing and tax compliance support.</li></ul>"
            },
            {
              "title": "Who can benefit from your services?",
              "description": "<p>Our services are ideal for:</p><ul><li>Startups looking for cost-effective financial solutions.</li><li>Small and medium-sized businesses aiming to streamline bookkeeping.</li><li>Individuals and professionals or freelancer requiring expert financial management.</li></ul>"
            },
            {
              "title": "How much do your services cost?",
              "description": "<ul><li>Our pricing is flexible and starts at $100/month for startups. The final cost depends on your specific requirements and business size.</li></ul>"
            },
            {
              "title": "Why should I choose Virtual Remote Bookkeeper?",
              "description": "<ul><li>xpertise in multiple accounting platforms.</li><li>A team of 50+ experienced professionals.</li><li>Affordable and flexible pricing.</li><li>Dedicated experts assigned within 2–7 days.</li><li>Prompt communication in fluent English via chat or call.</li></ul>"
            }
           
           
          ]
        },
        "section11": {
          "status": "true",
          "title": "Get in touch",
           "description": "Ready to simplify your bookkeeping? Get in touch with us today! Our team of experts is here to answer your questions and provide tailored solutions for your business needs."
        }
      
      }
    }
  
  
    return  newArray;

  }else{
      const response = await fetch(`${baseUrl}/pages?slug=${pageSlug}`);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0 && data[0]?.content) {
      
          data[0].content=JSON.stringify(data[0].content);
          return  data[0];
        }else{
          const newArray =  {  slug: pageSlug,
            meta: {
              title: "",
              description: ""
            },
            content: "Page not Found" }
        
        
          return  newArray;
        }
    }
});


interface Meta {
  title: string;
  description: string;
  keywords: string;
}

interface PageContentData {
  slug: string;
  content: string;
  meta: Meta;
}


interface footerMenus {
  name: string;
  url: string;
}

interface subMenus {
  name: string;
  url: string;
}

interface headerMenus {
  name: string;
  url: string; 
  subMenu: subMenus[] | null;
}


interface dataState {
  data:PageContentData | null,
  status: string;
  error: string | null;
  value: number;
  blogCategories: { [key: string]: string };
  footerMenu: footerMenus[];
  headerMenu: headerMenus[];
  footerText: string;
}

const initialState: dataState = {
  data: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  value: 0,
  blogCategories: {
    1: 'Xero Bookkeeping Packages',
    2: 'Value and Benefits Xero Services',
    3: 'Individuals & Freelancers',
  },
  footerMenu: [
    {name:"QuickBooks Bookkeeping",url: 'quickbooks-bookkeeping-services'},
   {name:"Zoho Bookkeeping",url:'zoho-bookkeeping'},
    {name:"Accounting Services",url: 'accounting-services'},
    {name:"Professionals Bookkeeping",url: 'professionals-bookkeeping-services'},
    {name:"Xero Bookkeeping Services",url: 'xero-bookkeeping-services'},
    {name:"blogs",url: 'blogs'}
  ],
    headerMenu: [
    {name:"QuickBooks Bookkeeping",url: '/quickbooks-bookkeeping-services',subMenu:null},
    {name:"Zoho Bookkeeping",url:'/zoho-bookkeeping',subMenu:null},
    {name:"Xero Bookkeeping Services",url: '/xero-bookkeeping-services',subMenu:null},
    {name:"Accounting Services",url: '/accounting-services',subMenu:[
      {name:"Accountant for doctor",url: '/accountant-for-doctors'},
      {name:"Accountant for therapist",url: '/accountant-for-therapist'},
      {url:"/accountant-for-medical-practitioners",name: 'Accountant for medical practitioners'},
      {url:"/accountant-for-psychotherapists",name: 'Accountant for psychotherapists'},
      {url:"/accountant-for-counsellors",name: 'ccountant for counsellors'},
      {url:"/accountant-for-physicians",name: 'Accountant for Physicians'}
   
     ]},
    {name:"Professionals Bookkeeping",url: '/professionals-bookkeeping-services',subMenu:[
      {name:"bookkeeping services for Doctor",url: '/bookkeeping-for-doctors'},
      {name:"bookkeeping services for Therapist",url: '/bookkeeping-for-therapist'},
      {name:"bookkeeping for Medical Practitioners",url: '/bookkeeping-for-medical-practitioners'},
      {name:"bookkeeping for Psychotherapists",url: '/bookkeeping-for-psychotherapists'},
      {name:"bookkeeping for Counsellors",url: '/bookkeeping-for-counsellors'},
      {name:"bookkeeping for Physicians",url: '/bookkeeping-for-physicians'}

     ]}
   ],
  footerText:"With Our Virtual Remote Bookkeeper Experts, you can trust that each service is delivered with professionalism, accuracy, and a focus on your unique business needs."
 

};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});



export const selectData = (state: RootState) => state.data.data;
export const selectHeaderMenu= (state: RootState) => state.data.headerMenu;
export const selectStatus = (state: RootState) => state.data.status;
export const selectError = (state: RootState) => state.data.error;

export const { increment, decrement, incrementByAmount } = dataSlice.actions;
export default dataSlice.reducer;