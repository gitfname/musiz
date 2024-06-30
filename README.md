Vite+React StarterKit

**Dependencies**

    +-- Vite
    +-- React
    +-- FramerMotion
    +-- Chakra-Ui
    +-- AntDesign
    +-- ReactRouterDom
    +-- i18next
    +-- TailwindCSS
    +-- Material-Tailwind/React
    +-- Zustand
    +-- Axios
    +-- SWR





**Folder Structure**

    src
        +-- assets              # assets folder can contain all the static files such as images, fonts, etc.

        +-- components          # shared components used across the entire application

        +-- features            # feature based modules

        +-- hooks               # shared hooks used across the entire application

        +-- lib                 # re-exporting different libraries preconfigured for the application

        +-- providers           # all of the application providers ( SupaBase Provider / FireBase Provider. etc )

        +-- stores              # global state stores

        +-- types               # base types used across the application

        +-- utils               # shared utility functions

        +-- context             # shared context

        +-- layout-components   # shared components which are mostly used as a layout component ( navbar, footer, mobilemenu etc )

        +-- layouts             # shared components which are used as an layout for entire application or bunch of pages

        +-- pages               # components which are used as applicaiton pages

        +-- services            # functions which are used to interact with api/http requests

            +-- api             # functions which are used to interact with application api server

            +-- ui              # functions which are used to interact with APIs which which their response will be used to create the application-shell ( menu links, footer links/text hero sectoin image/text. etc )

        +-- data                # static data used in the application ( if thses data are likely will be changed a few times in short time period. its better to server these static data from an api endpoint )


        +-- constants.ts        # constant variables you'l gonna use in the app. but you don't want to serve them from .env file

        +-- themes              # theme files are served from here ( light.css, dark.css, etc )

    public
        +-- locals              # translation files are served from here ( en/translation.json, fr/translation.json etc )