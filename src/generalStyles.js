import { StyleSheet } from "react-native";

export const pointec_Styles = StyleSheet.create({
    //flex
    flex: {
        flex: 1
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexCenterVertical: {
        justifyContent: 'center'
    },
    flexCenterHorizontal: {
        alignItems: 'center'
    },
    flexSelfCenter: {
        alignSelf: 'center'
    },
    flexBetween: {
        justifyContent: 'space-between'
    },
    flexAround: {
        justifyContent: 'space-around'
    },
    //text
    textCenter: {
        textAlign: 'center'
    },
    textLeft: {
        textAlign: 'left'
    },
    textRight: {
        textAlign: 'right'
    },
    textBold: {
        fontWeight: 'bold'
    },
    textUnderline: {
        textDecorationLine: 'underline'
    },
    textWhite: {
        color: '#fff'
    },
    textBlack: {
        color: '#000'
    },
    textGray: {
        color: '#999'
    },
    textGrayLight: {
        color: '#ccc'
    },
    textError: {
        backgroundColor: '#ff0000',
        padding: 5,
        borderRadius: 5,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle2: {
        fontSize: 20,
    },
    text: {
        fontSize: 15,
    },
    textSmall: {
        fontSize: 10,
    },
    //magin
    marginOne: {
        margin: 5
    },
    marginTwo: {
        margin: 10
    },
    marginThree: {
        margin: 15
    },
    marginTopOne: {
        marginTop: 5
    },
    marginTopTwo: {
        marginTop: 10
    },
    marginTopThree: {
        marginTop: 15
    },
    marginBottomOne: {
        marginBottom: 5
    },
    marginBottomTwo: {
        marginBottom: 10
    },
    marginBottomThree: {
        marginBottom: 15
    },
    marginLeftOne: {
        marginLeft: 5
    },
    marginLeftTwo: {
        marginLeft: 10
    },
    marginLeftThree: {
        marginLeft: 15
    },
    marginRightOne: {
        marginRight: 5
    },
    marginRightTwo: {
        marginRight: 10
    },
    marginRightThree: {
        marginRight: 15
    },
    //padding
    paddingOne: {
        padding: 5
    },
    paddingTwo: {
        padding: 10
    },
    paddingThree: {
        padding: 15
    },
    paddingTopOne: {
        paddingTop: 5
    },
    paddingTopTwo: {
        paddingTop: 10
    },
    paddingTopThree: {
        paddingTop: 15
    },
    paddingBottomOne: {
        paddingBottom: 5
    },
    paddingBottomTwo: {
        paddingBottom: 10
    },
    paddingBottomThree: {
        paddingBottom: 15
    },
    paddingLeftOne: {
        paddingLeft: 5
    },
    paddingLeftTwo: {
        paddingLeft: 10
    },
    paddingLeftThree: {
        paddingLeft: 15
    },
    paddingRightOne: {
        paddingRight: 5
    },
    paddingRightTwo: {
        paddingRight: 10
    },
    paddingRightThree: {
        paddingRight: 15
    },
    //width 
    widthFull: {
        width: '100%'
    },
    width75: {
        width: '75%'
    },
    width50: {
        width: '50%'
    },
    width25: {
        width: '25%'
    },
    //height
    heightFull: {
        height: '100%'
    },
    height75: {
        height: '75%'
    },
    height50: {
        height: '50%'
    },
    height25: {
        height: '25%'
    },
    //gap
    gapOne: {
        gap: 5
    },
    gapTwo: {
        gap: 10
    },
    gapThree: {
        gap: 15
    },
    //border
    borderTopBottom: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#000',  // Puedes cambiar el color del borde según tus necesidades
    },
    borderRight: {
        borderRightWidth: 1,
        borderColor: '#000',
    },
    borderLeft: {
        borderLeftWidth: 1,
        borderColor: '#000',
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    //predefined
    BackgroundColorPredefined: {
        flex: 1,
        backgroundColor: '#16191C',
    },
    backgroundColorPredefined1: {
        backgroundColor: '#16191C',
    },
    cardsColorBG: {
        backgroundColor: '#1E2126',
    },
    logo: {
        width: 250,
        height: 250,
        objectFit: 'contain',
    },
    logoHeader: {
        height: 50,
        width: 100,
        objectFit: 'contain',
    },
    input: {
        color: '#f3f3f3',
        backgroundColor: '#1E2126',
        borderRadius: 5,
    },
    // Si no hay algún estilo que necesitas, puedes agregarlo aquí
});

export const theme = {
    backgroundColor: {
        primary: '#1E2126',
        success: '#23d823',
        error: '#ff0000',
    },
    color: {
        default: "#fff",
        black: "#000",
        gray: "#999"
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    gap: [0, 4, 8, 16, 32, 64, 128, 256],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
    alignItems: ['flex-start', 'center', 'flex-end'],
    alignSelf: ['auto', 'flex-start', 'center', 'flex-end'],
    textAlign: ['auto', 'left', 'right', 'center', 'justify'],
    flexDirection: ['row', 'column'],
    flexWrap: ['wrap', 'nowrap'],
    flex: [0, 1],
    wordBreak: ['break-all', 'break-word', 'keep-all'],
    wordWrap: ['normal', 'break-word'],
    textTransform: ['none', 'capitalize', 'uppercase', 'lowercase'],
    textOverflow: ['clip', 'ellipsis'],
    whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'],
    fontWeight: ['normal', 'bold', 'bolder', 'lighter'],
    fontStyle: ['normal', 'italic'],
    textDecoration: ['none', 'underline', 'overline', 'line-through'],
    position: ['relative', 'absolute', 'fixed', 'sticky'],
    display: ['none', 'flex', 'block', 'inline-block', 'inline', 'grid', 'table', 'table-row', 'table-cell'],
    cursor: ['auto', 'default', 'pointer', 'text', 'move', 'not-allowed'],
    overflow: ['visible', 'hidden', 'scroll', 'auto'],
    visibility: ['visible', 'hidden', 'collapse'],
    zIndex: [0, 1, 2, 3, 4, 5],
    width: ['auto', '100%', '50%', '25%', '75%'],
    height: ['auto', '100%', '50%', '25%', '75%'],
    padding: [0, 4, 8, 16, 32, 64, 128, 256],
    margin: [0, 4, 8, 16, 32, 64, 128, 256],
    borderRadius: [0, 4, 8, 16, 32, 64, 128, 256],
    borderWidth: [0, 1, 2, 3, 4, 5],
    borderColor: ['transparent', '#000', '#fff'],
    borderStyle: ['solid', 'dotted', 'dashed'],
    // Puedes agregar más propiedades según tus necesidades
}