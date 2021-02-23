import { css } from '@emotion/css'

const brand = '#74D900';

const figcaptionClass = css`
	color: ${brand};
	font-size: 1em;
	white-space: nowrap;
`;

const strongClass = css`
    color: inherit;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 1px solid ${brand};
    &:hover {
        text-decoration: none;
        background: ${brand};
    }
`;

export {
    figcaptionClass,
    strongClass,
}