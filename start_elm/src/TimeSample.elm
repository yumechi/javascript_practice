module TimeSample exposing (..)

import Browser
import Html exposing (..)
import Html.Events exposing (onClick)
import Task
import Time



-- TODO: elm/svg を使って赤い秒針のアナログ時計を作る
-- MAIN


main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model =
    { zone : Time.Zone
    , time : Time.Posix
    , currentStatus : Bool
    }


init : () -> ( Model, Cmd Msg )
init _ =
    ( Model Time.utc (Time.millisToPosix 0) True
    , Task.perform AdjustTimeZone Time.here
    )



-- UPDATE


type Msg
    = Tick Time.Posix
    | AdjustTimeZone Time.Zone
    | SwitchTimeFlow


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Tick newTime ->
            ( { model | time = newTime }, Cmd.none )

        AdjustTimeZone newZone ->
            ( { model | zone = newZone }, Cmd.none )

        SwitchTimeFlow ->
            ( { model | currentStatus = not model.currentStatus }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    if model.currentStatus then
        Time.every 1000 Tick

    else
        Sub.none



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ let
            -- |> String.padLeft 2 '0' を使うと2桁表示にできる
            hour =
                String.fromInt (Time.toHour model.zone model.time)
                    |> String.padLeft 2 '0'

            minute =
                String.fromInt (Time.toMinute model.zone model.time)
                    |> String.padLeft 2 '0'

            second =
                String.fromInt (Time.toSecond model.zone model.time)
                    |> String.padLeft 2 '0'
          in
          h1 [] [ text (hour ++ ":" ++ minute ++ ":" ++ second) ]
        , button [ onClick SwitchTimeFlow ] [ text (getNextStatusText model) ]
        ]


getNextStatusText : Model -> String
getNextStatusText model =
    if model.currentStatus then
        "Stop"

    else
        "Start"
