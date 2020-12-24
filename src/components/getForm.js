/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { Link } from 'gatsby'

import EnquiryForm from '../components/forms/enquiryForm'
import LeadForm from '../components/forms/leadForm'
import QuoteForm from '../components/forms/quoteForm'

export function getForm(
    option,
    buttonName,
    buttonUrl,
    backgroundColor,
    buttonBackground,
) {
    // console.log('Button URL is: ' + buttonUrl)
    // switch (option) {
    //     case 'btnonly':
    //         if (buttonUrl) {
    //             return (
    //                 <Fragment>
    //                     <Link
    //                         to={buttonUrl}
    //                         sx={{
    //                             variant: 'buttons.simple',
    //                             backgroundColor: `${buttonBackground}`,
    //                             color: `${backgroundColor || 'white'}`,
    //                             textDecoration: 'none',
    //                         }}
    //                     >
    //                         {buttonName}
    //                         {buttonUrl}
    //                     </Link>
    //                 </Fragment>
    //             )
    //         }
    //         break
    //     case 'lead':
    //         return (
    //             <LeadForm
    //                 buttonBackground={buttonBackground}
    //                 color={`${backgroundColor || 'black'}`}
    //                 formStyle='inputs.background'
    //                 btnColor={`${backgroundColor || 'white'}`}
    //             />
    //         )
    //     case 'contact':
    //         return (
    //             <EnquiryForm
    //                 buttonBackground={buttonBackground}
    //                 color={`${backgroundColor || 'black'}`}
    //                 formStyle='inputs.background'
    //                 btnColor={`${backgroundColor || 'white'}`}
    //             />
    //         )
    //     case 'quote':
    //         return (
    //             <QuoteForm
    //                 buttonBackground={buttonBackground}
    //                 color={`${backgroundColor || 'black'}`}
    //                 formStyle='inputs.background'
    //                 btnColor={`${backgroundColor || 'white'}`}
    //             />
    //         )
    //     default:
    //         return null
    // }
    console.log(buttonUrl)
    if (option === 'btnonly') {
        return (
            <Fragment>
                <Link
                    to={buttonUrl}
                    sx={{
                        variant: 'buttons.simple',
                        backgroundColor: `${buttonBackground}`,
                        color: `${backgroundColor || 'white'}`,
                        textDecoration: 'none',
                    }}
                >
                    {buttonName}
                </Link>
            </Fragment>
        )
    }
    if (option === 'lead') {
        return (
            <LeadForm
                buttonBackground={buttonBackground}
                color={`${backgroundColor || 'black'}`}
                formStyle='inputs.background'
                btnColor={`${backgroundColor || 'white'}`}
            />
        )
    }
    if (option === 'contact') {
        return (
            <EnquiryForm
                buttonBackground={buttonBackground}
                color={`${backgroundColor || 'black'}`}
                formStyle='inputs.background'
                btnColor={`${backgroundColor || 'white'}`}
            />
        )
    }
    if (option === 'quote') {
        return (
            <QuoteForm
                buttonBackground={buttonBackground}
                color={`${backgroundColor || 'black'}`}
                formStyle='inputs.background'
                btnColor={`${backgroundColor || 'white'}`}
            />
        )
    }
}
