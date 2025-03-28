import React, {useEffect, useState} from 'react';
import {Button} from "~/components/ui/button";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "~/components/ui/collapsible";
import {Switch} from "~/components/ui/switch";
import {Label} from "~/components/ui/label";
import {InfoIcon} from "lucide-react";

interface Preferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

interface CookieBannerProps {
    onAccept: (preferences: Preferences) => void;
}

const translations = {
    en: {
        message: "We use cookies to improve your experience. Customize your preferences:",
        necessary: "Necessary (always active)",
        analytics: "Analytics",
        marketing: "Marketing",
        accept: "Accept",
        decline: "Decline",
    },
    de: {
        message: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Passen Sie Ihre Einstellungen an:",
        necessary: "Notwendig (immer aktiv)",
        analytics: "Analytik",
        marketing: "Marketing",
        accept: "Akzeptieren",
        decline: "Ablehnen",
    }
};

const CookieBanner: React.FC<CookieBannerProps> = ({onAccept}) => {
    const [showBanner, setShowBanner] = useState(false);
    const [preferences, setPreferences] = useState<Preferences>({
        necessary: true,
        analytics: false,
        marketing: false,
    });
    const [language, setLanguage] = useState<'en' | 'de'>('de');

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', JSON.stringify(preferences));
        setShowBanner(false);
        onAccept(preferences);
    };

    const handleDecline = () => {
        const declinedPreferences = {
            necessary: true,
            analytics: false,
            marketing: false,
        };
        localStorage.setItem('cookieConsent', JSON.stringify(declinedPreferences));
        setShowBanner(false);
        onAccept(declinedPreferences);
    };

    const handleSwitchChange = (checked: boolean, name: string) => {
        setPreferences({
            ...preferences,
            [name]: checked,
        });
    };

    if (!showBanner) {
        return null;
    }

    const t = translations[language];

    return (
        <div className="fixed bottom-0 text-black start-0 end-0 bg-white border-top p-3">
            <div>{t.message}</div>
            <div className="my-3">
                <div>
                    <Collapsible>
                        <div className="flex gap-3 items-center">
                            <Switch disabled checked id="necessary-switch"/>
                            <Label htmlFor="necessary-switch">{t.necessary}</Label>
                            <CollapsibleTrigger><InfoIcon/></CollapsibleTrigger>
                        </div>
                        <CollapsibleContent>
                            Yes. Free to use for personal and commercial projects. No attribution required.
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible>
                        <div className="flex gap-3 items-center">
                            <Switch
                                checked={preferences.analytics}
                                name="analytics"
                                onCheckedChange={(checked) => handleSwitchChange(checked, 'analytics')}
                                id="analytics-switch"
                            />
                            <Label htmlFor="analytics-switch">{t.analytics}</Label>
                            <CollapsibleTrigger><InfoIcon/></CollapsibleTrigger>
                        </div>
                        <CollapsibleContent>
                            Yes. Free to use for personal and commercial projects. No attribution required.
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible>
                        <div className="flex gap-3 items-center">
                            <Switch
                                checked={preferences.marketing}
                                name="marketing"
                                onCheckedChange={(checked) => handleSwitchChange(checked, 'marketing')}
                                id="marketing-switch"
                            />
                            <Label htmlFor="marketing-switch">{t.marketing}</Label>
                            <CollapsibleTrigger><InfoIcon/></CollapsibleTrigger>
                        </div>
                        <CollapsibleContent>
                            Yes. Free to use for personal and commercial projects. No attribution required.
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
            <div className="flex gap-2">
                <Button onClick={handleAccept}>{t.accept}</Button>
                <Button onClick={handleDecline}>{t.decline}</Button>
            </div>
            <div className="mt-3 flex align-items-center">
                <div
                    onClick={() => setLanguage("de")}
                    className={`cursor-pointer mx-1 ${language === "de" ? 'border-2 border-x-0 border-t-0 border-green-500' : null}`}
                >DE
                </div>
                <div
                    onClick={() => setLanguage("en")}
                    className={`cursor-pointer mx-1 ${language === "en" ? "border-2 border-x-0 border-t-0 border-green-500" : null}`}
                >EN
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;