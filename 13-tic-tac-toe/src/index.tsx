import React, { ReactElement } from "react";
import { AppBootstrap } from "@components";
import Navigator from "@config/navigator";
import { SettingProvider } from '@contexts/settings-context';

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <SettingProvider>
                <Navigator />
            </SettingProvider>
        </AppBootstrap>
    );
}
