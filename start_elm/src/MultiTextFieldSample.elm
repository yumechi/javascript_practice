module MultiTextFieldSample exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)



-- MAIN


main =
    Browser.sandbox { init = init, update = update, view = view }



-- MODEL


type alias Model =
    { name : String
    , age : String
    , password : String
    , passwordAgain : String
    }


init : Model
init =
    Model "" "" "" ""



-- UPDATE


type Msg
    = Name String
    | Age String
    | Password String
    | PasswordAgain String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Name name ->
            { model | name = name }

        Age age ->
            { model | age = age }

        Password password ->
            { model | password = password }

        PasswordAgain passwordAgain ->
            { model | passwordAgain = passwordAgain }



-- View


view : Model -> Html Msg
view model =
    div []
        [ viewInput "text" "Name" model.name Name
        , viewInput "age" "Age" model.age Age
        , viewInput "password" "Password" model.password Password
        , viewInput "passwordAgain" "Re-enter Password" model.passwordAgain PasswordAgain
        , ageValidation model
        , passwordValidation model
        ]


viewInput : String -> String -> String -> (String -> msg) -> Html msg
viewInput t p v toMsg =
    input [ type_ t, placeholder p, value v, onInput toMsg ] []


ageValidation : Model -> Html msg
ageValidation model =
    if String.all Char.isDigit model.age || isEmptyAge model then
        div [ style "color" "white" ] [ text "" ]

    else
        div [ style "color" "red" ] [ text "Illegal AgeInput, remove not digit character" ]


passwordValidation : Model -> Html msg
passwordValidation model =
    if isEmptyPassword model then
        div [ style "color" "white" ] [ text "" ]

    else if isShortPassword model then
        div [ style "color" "red" ] [ text "Too Short Password, please input over 8 character" ]

    else if isHavingPattern model then
        div [ style "color" "red" ] [ text "Password needs to having lower alphabets, upper alphabets and digits" ]

    else if isEqualPassword model then
        div [ style "color" "green" ] [ text "OK" ]

    else
        div [ style "color" "red" ] [ text "Password not match" ]


isEmptyInput : String -> Bool
isEmptyInput line =
    String.length line == 0 && String.length line == 0


isEmptyAge : Model -> Bool
isEmptyAge model =
    isEmptyInput model.age


isEmptyPassword : Model -> Bool
isEmptyPassword model =
    isEmptyInput model.password


isEqualPassword : Model -> Bool
isEqualPassword model =
    model.password == model.passwordAgain


isShortPassword : Model -> Bool
isShortPassword model =
    String.length model.password < 8


isHavingPattern : Model -> Bool
isHavingPattern model =
    not (String.any Char.isDigit model.password && String.any Char.isLower model.password && String.any Char.isUpper model.password)
