import React from 'react'
import styled from 'styled-components'
import { Card } from 'rebass'

export const Portrait = styled(Card)`
    overflow: hidden;
    min-height: 12rem;
    border-radius: 6px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.125);
    line-height: 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  `