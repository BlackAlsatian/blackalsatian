/** @jsxImportSource theme-ui */

import { Link } from 'gatsby'

import EnquiryForm from '../components/forms/enquiryForm'
import LeadForm from '../components/forms/leadForm'
import QuoteForm from '../components/forms/quoteForm'
import { handleErrorColor } from '../components/helpers'

export const getForm = (option, buttonName, buttonUrl, backgroundColor, buttonBackground) => {
    const errorColor = handleErrorColor(backgroundColor)
    if (option === 'btnonly') {
        return (
            <p>
                <Link
                    to={buttonUrl}
                    sx={{
                        variant: 'buttons.simple',
                        display: 'inline-block',
                        backgroundColor: `${buttonBackground}`,
                        color: `${backgroundColor || 'white'}`,
                        textDecoration: 'none',
                        boxShadow: 'xl',
                        '&:hover': {
                            boxShadow: 'none',
                        },
                    }}
                >
                    {buttonName}
                </Link>
            </p>
        )
    }
    if (option === 'lead') {
        return (
            <LeadForm
                buttonBackground={buttonBackground}
                color={`${backgroundColor || 'black'}`}
                formStyle='inputs.background'
                btnColor={`${backgroundColor || 'white'}`}
                buttonName={buttonName}
                errorColor={errorColor}
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
                buttonName={buttonName}
                errorColor={errorColor}
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
                buttonName={buttonName}
                errorColor={errorColor}
            />
        )
    }
}
// export getForm
