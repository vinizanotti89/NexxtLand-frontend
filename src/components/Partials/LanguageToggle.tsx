'use client'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Icon from '../Adapters/Icon'

export function LanguageToggle() {
    const langChange = (e: any, evt: any) => {
        evt.preventDefault()
        if (Cookies.get('googtrans')) {
            Cookies.set('googtrans', decodeURI(e))
        } else {
            Cookies.set('googtrans', e)
        }
        window.location.reload()
    }

    const googleTranslateElementInit = () => {
        // @ts-ignore
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'pt',
                autoDisplay: false,
                includedLanguages: 'en,pt,es',
                // @ts-ignore
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
        )
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            var addScript = document.createElement('script')
            addScript.setAttribute(
                'src',
                '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
            )
            document.body.appendChild(addScript)
            // @ts-ignore
            window.googleTranslateElementInit = googleTranslateElementInit
        }
    }, [])

    return (
        <>
            <div className="flex gap-2">
                <Icon icon="emojione:flag-for-brazil" className={`text-4xl hover:cursor-pointer md:text-4xl rounded-full ring-white ${Cookies.get('googtrans') === '/auto/pt' &&
                    'ring-2'
                    }`}
                    onClick={(e) => langChange('/auto/pt', e)} />
                <Icon icon="emojione:flag-for-united-states" className={`text-4xl hover:cursor-pointer md:text-4xl rounded-full ring-white ${Cookies.get('googtrans') === '/pt/en' &&
                    'ring-2'
                    }`}
                    onClick={(e) => langChange('/auto/en', e)} />
                <Icon icon="emojione:flag-for-spain" className={`text-4xl hover:cursor-pointer md:text-4xl rounded-full ring-white ${Cookies.get('googtrans') === '/pt/es' &&
                    'ring-2'
                    }`}
                    onClick={(e) => langChange('/auto/es', e)} />
            </div>
            <div id="google_translate_element" className='hidden'></div>
        </>
    )
}
