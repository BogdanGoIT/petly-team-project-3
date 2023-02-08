import styled from "styled-components"
import { ReactComponent as Plus} from '../../images/icons/modalAddsPet/plus.svg'

export const ModalAddsPetWrapper = styled.div`
    position: absolute;
    max-width: 280px;
    background-color: ${p => p.theme.colors.white};
    padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
    padding-top: ${p => p.theme.space[10]}px;
    padding-bottom: ${p => p.theme.space[10]}px;
    border-radius: ${p => p.theme.radii.normal};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: 768px) {
        max-width: 608px;
        padding-left: ${p => p.theme.space[13]}px;
        padding-right: ${p => p.theme.space[13]}px;
    }
`
export const ModalAddsPetForm = styled.form`
    min-width: 446px;
`

export const FirstPageAddsPetForm = styled.div`
    position: ${p => p.firstPageHide ? 'fixed' : 'static'};
    opacity: ${p => p.firstPageHide ? 0 : 1};
    width: ${p => p.firstPageHide ? p.theme.space[0] : '100%'};
`

export const SecondPageAddsPetForm = styled.div`
    position: ${p => p.firstPageHide ? 'fixed' : 'static'};
    opacity: ${p => p.firstPageHide ? 0 : 1};
    width: ${p => p.firstPageHide ? p.theme.space[0] : '100%'};
`

export const ModalAddsPetItputsWrapper = styled.div`
    margin-top: ${p => p.theme.space[8]}px;
    margin-bottom: ${p => p.theme.space[10]}px;

     @media screen and (min-width: 768px) {
        margin-top: ${p => p.theme.space[10]}px;
    }
`

export const ModalAddsPetContainer = styled.div`
    &:not(:last-child){
        margin-bottom: ${p => p.theme.space[5]}px; 
    }

    @media screen and (min-width: 768px) {
        &:not(:last-child){
        margin-bottom: ${p => p.theme.space[8]}px; 
    }
    }
`

export const ModalAddsPetLabel = styled.label`
    display: block;
    font-size: ${p => p.theme.fontSizes[3]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: 1.44;
    margin-bottom: ${p => p.theme.space[3]}px;

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[5]};
        line-height: ${p => p.theme.fontHeight.xs};
        margin-bottom: ${p => p.theme.space[4]}px;
    }
`

export const ModalAddsPetInput = styled.input`
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[1]};
    font-weight: ${p => p.theme.fontWeights.thin};
    line-height: 1.35;
    width: 240px;
    height: 40px;
    padding: 11px 14px;
    border-radius: ${p => p.theme.radii.big};
    background-color: ${p => p.theme.colors.background};
    border: ${p => p.theme.borders.small};
    border-color: ${p => p.theme.colors.inputColor};
    transition: ${p => p.theme.transition.all};

    &:focus {
        border-color: ${p => p.theme.colors.hoveredAccent};
        border: ${p => p.theme.borders.small};
        border-radius: ${p => p.theme.radii.normal};
        box-shadow: ${p => p.theme.shadows.mainShadow};
        outline-color: ${p => p.theme.colors.hoveredAccent};
    }

    &::placeholder {
        color: ${p => p.theme.colors.inputPlaceholder};
}

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[2]};
        line-height: 1.6;
        width: 448px;
        height: 48px;
        padding-left: ${p => p.theme.space[5]}px;
        padding-right: ${p => p.theme.space[5]}px;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
`

export const ModalAddsPetDescription = styled.p`
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[2]};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.fontHeight.l};
    text-align: center;
    margin-bottom: ${p => p.theme.space[6]}px;
    margin-top: ${p => p.theme.space[6]}px;

    @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes[4]};
        line-height: ${p => p.theme.fontHeight.s};
        letter-spacing: -0.01em;
    }
`

export const ModalAddsPetPlusWrapper = styled.div`
    position: relative;
    background-color: ${p => p.theme.colors.background};
    margin-right: auto;
    margin-left: auto;
    margin-bottom: ${p => p.theme.space[6]}px;
    width: 208px;
    height: 208px;
    border-radius: ${p => p.theme.radii.normal};
    border: ${p => p.theme.borders.none};

    @media screen and (min-width: 768px) {
        width: 182px;
        height: 182px;
        margin-bottom: ${p => p.theme.space[10]}px;
    }
` 

export const ModalAddsPetImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${p => p.theme.radii.normal};
`

export const ModalAddsPetPlusInput = styled.input`
    padding-bottom: 25px;
    opacity: 0;
    position: absolute;
    /* z-index: -1; */
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    
`

export const PlusStyled = styled(Plus)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: ${p => p.theme.transition.all};

    &:hover,
      :focus {
           fill: ${p => p.theme.colors.hoveredAccent}
    }

`

export const ModalAddsPetTextarea = styled.textarea`
    font-family: ${p => p.theme.fonts.body};
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[1]};
    font-weight: ${p => p.theme.fontWeights.thin};
    line-height: 1.35;
    width: 240px;
    min-height: 100px;
    padding-top: ${p => p.theme.space[4]}px;
    padding-left: 14px;
    border-radius: ${p => p.theme.radii.big};
    background-color: ${p => p.theme.colors.background};
    border: ${p => p.theme.borders.small};
    border-radius: ${p => p.theme.radii.normal};
    border-color: ${p => p.theme.colors.inputColor};
    margin-bottom: ${p => p.theme.space[10]}px;
    transition: ${p => p.theme.transition.all};
    resize : none;
    overflow : auto;

    &:focus {
        border-color: ${p => p.theme.colors.hoveredAccent};
        border: ${p => p.theme.borders.small};
        border-radius: ${p => p.theme.radii.normal};
        box-shadow: ${p => p.theme.shadows.mainShadow};
        outline-color: ${p => p.theme.colors.hoveredAccent};
    }

    &::placeholder {
        color: ${p => p.theme.colors.inputPlaceholder};
    }

@media screen and (min-width: 768px) {
        width: 394px;
        min-height: 116px;
        font-size: ${p => p.theme.fontSizes[2]};
        padding-top: ${p => p.theme.space[5]}px;
        padding-left: ${p => p.theme.space[5]}px;
    }
`