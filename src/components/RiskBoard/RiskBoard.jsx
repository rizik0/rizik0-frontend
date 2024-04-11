import * as React from "react"
import './RiskBoard.scss'
import { useEffect, useState } from 'react'

function getRegionObject(maps, region) {
  if (maps == undefined) return null;
  for (let i = 0; i < maps.length; i++) { 
    if (maps[i].name == region) {
      return maps[i]
    }
  }
}



const RiskBoard = ({ maps, phase, setCountryName }) => {
  function handlePathClick(event) {

    const lands = document.querySelectorAll('.land');
    lands.forEach(land => land.classList.remove('active'));

    if (event.target) {
      event.target.classList.add('active');
      const countryName = event.target.getAttribute('id');
      setCountryName(countryName);
    }
  }

  useEffect(() => {

      const paths = document.querySelectorAll('svg path');
      paths.forEach(path => {
        path.addEventListener('click', handlePathClick);
      });

      return () => {
        paths.forEach(path => {
          path.removeEventListener('click', handlePathClick);
        });
      };
    }, []);

  return(
    <div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg2"
    width={749.819}
    height={519.068}
    style={{
      enableBackground: "new",
    }}
  >
    <style>
      {
        '.board-region{cursor:pointer;text-shadow: 1px 1px 4px black;font-size:22px;fill:#FFF;font-weight:700;font-family:"Times New Roman"}'
      }
    </style>
    <defs id="defs5">
      <filter
        id="filter7968"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur7970" stdDeviation={0.274} />
      </filter>
      <filter id="filter7972">
        <feGaussianBlur id="feGaussianBlur7974" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter7976"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur7978" stdDeviation={0.274} />
      </filter>
      <filter id="filter7980">
        <feGaussianBlur id="feGaussianBlur7982" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter7984"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur7986" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter7988"
        width={2.053}
        height={1.037}
        x={-0.527}
        y={-0.019}
      >
        <feGaussianBlur id="feGaussianBlur7990" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter7992"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur7994" stdDeviation={0.274} />
      </filter>
      <filter id="filter7996">
        <feGaussianBlur id="feGaussianBlur7998" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8000"
        width={1.035}
        height={1.211}
        x={-0.018}
        y={-0.105}
      >
        <feGaussianBlur id="feGaussianBlur8002" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8004"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8006" stdDeviation={0.274} />
      </filter>
      <filter id="filter8008">
        <feGaussianBlur id="feGaussianBlur8010" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8012"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8014" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8016"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8018" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8020"
        width={1.545}
        height={1.069}
        x={-0.273}
        y={-0.034}
      >
        <feGaussianBlur id="feGaussianBlur8022" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8024"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8026" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8028"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8030" stdDeviation={0.274} />
      </filter>
      <filter id="filter8032">
        <feGaussianBlur id="feGaussianBlur8034" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8036"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8038" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8040"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8042" stdDeviation={0.274} />
      </filter>
      <filter id="filter8044">
        <feGaussianBlur id="feGaussianBlur8046" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8048"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8050" stdDeviation={0.274} />
      </filter>
      <filter id="filter8052" width={1.067} height={1.26} x={-0.033} y={-0.13}>
        <feGaussianBlur id="feGaussianBlur8054" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8056"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8058" stdDeviation={0.274} />
      </filter>
      <filter id="filter8060">
        <feGaussianBlur id="feGaussianBlur8062" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8064"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8066" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8068"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8070" stdDeviation={0.274} />
      </filter>
      <filter id="filter8072">
        <feGaussianBlur id="feGaussianBlur8074" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8076"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8078" stdDeviation={0.274} />
      </filter>
      <filter id="filter8080">
        <feGaussianBlur id="feGaussianBlur8082" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8084"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8086" stdDeviation={0.274} />
      </filter>
      <filter id="filter8088">
        <feGaussianBlur id="feGaussianBlur8090" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8092"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8094" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8096"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8098" stdDeviation={0.274} />
      </filter>
      <filter id="filter8100">
        <feGaussianBlur id="feGaussianBlur8102" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8104"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8106" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8108"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8110" stdDeviation={0.274} />
      </filter>
      <filter id="filter8112">
        <feGaussianBlur id="feGaussianBlur8114" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8116"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8118" stdDeviation={0.274} />
      </filter>
      <filter id="filter8120" width={1.04} height={1.209} x={-0.02} y={-0.104}>
        <feGaussianBlur id="feGaussianBlur8122" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8124"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8126" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8128"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8130" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8132"
        width={1.771}
        height={1.027}
        x={-0.386}
        y={-0.014}
      >
        <feGaussianBlur id="feGaussianBlur8134" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8136"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8138" stdDeviation={0.274} />
      </filter>
      <filter id="filter8140">
        <feGaussianBlur id="feGaussianBlur8142" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8144"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8146" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8148"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8150" stdDeviation={0.274} />
      </filter>
      <filter id="filter8152">
        <feGaussianBlur id="feGaussianBlur8154" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8156"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8158" stdDeviation={0.274} />
      </filter>
      <filter id="filter8160">
        <feGaussianBlur id="feGaussianBlur8162" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8164"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8166" stdDeviation={0.274} />
      </filter>
      <filter id="filter8168">
        <feGaussianBlur id="feGaussianBlur8170" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8172"
        width={1.439}
        height={1.439}
        x={-0.219}
        y={-0.219}
      >
        <feGaussianBlur id="feGaussianBlur8174" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8176"
        width={1.068}
        height={2.316}
        x={-0.034}
        y={-0.658}
      >
        <feGaussianBlur id="feGaussianBlur8178" stdDeviation={0.274} />
      </filter>
      <filter
        id="filter8180"
        width={1.029}
        height={1.972}
        x={-0.015}
        y={-0.486}
      >
        <feGaussianBlur id="feGaussianBlur8182" stdDeviation={0.274} />
      </filter>
      <filter id="filter11175">
        <feGaussianBlur id="feGaussianBlur11177" stdDeviation={1.167} />
      </filter>
      <filter id="filter11217">
        <feGaussianBlur id="feGaussianBlur11219" stdDeviation={1.783} />
      </filter>
      <filter id="filter11297">
        <feGaussianBlur id="feGaussianBlur11299" stdDeviation={0.79} />
      </filter>
      <filter id="filter11377">
        <feGaussianBlur id="feGaussianBlur11379" stdDeviation={1.171} />
      </filter>
      <filter id="filter11461">
        <feGaussianBlur id="feGaussianBlur11463" stdDeviation={0.524} />
      </filter>
      <filter id="filter11563">
        <feGaussianBlur id="feGaussianBlur11565" stdDeviation={0.852} />
      </filter>
      <filter id="filter11579">
        <feGaussianBlur id="feGaussianBlur11581" stdDeviation={0.764} />
      </filter>
      <filter id="filter11627">
        <feGaussianBlur id="feGaussianBlur11629" stdDeviation={0.173} />
      </filter>
      <filter id="filter11747">
        <feGaussianBlur id="feGaussianBlur11749" stdDeviation={0.778} />
      </filter>
      <filter id="filter11855">
        <feGaussianBlur id="feGaussianBlur11857" stdDeviation={0.669} />
      </filter>
      <filter
        id="filter12053"
        width={1.069}
        height={1.323}
        x={-0.035}
        y={-0.161}
      >
        <feGaussianBlur id="feGaussianBlur12055" stdDeviation={0.326} />
      </filter>
      <filter id="filter12290">
        <feGaussianBlur id="feGaussianBlur12292" stdDeviation={0.447} />
      </filter>
      <filter id="filter12358">
        <feGaussianBlur id="feGaussianBlur12360" stdDeviation={0.395} />
      </filter>
      <filter id="filter12362">
        <feGaussianBlur id="feGaussianBlur12364" stdDeviation={0.395} />
      </filter>
      <filter id="filter12418">
        <feGaussianBlur id="feGaussianBlur12420" stdDeviation={1.037} />
      </filter>
      <filter id="filter12450">
        <feGaussianBlur id="feGaussianBlur12452" stdDeviation={0.755} />
      </filter>
      <filter id="filter12466">
        <feGaussianBlur id="feGaussianBlur12468" stdDeviation={1.327} />
      </filter>
      <filter id="filter12863">
        <feGaussianBlur id="feGaussianBlur12865" stdDeviation={0.581} />
      </filter>
      <filter id="filter12867">
        <feGaussianBlur id="feGaussianBlur12869" stdDeviation={0.581} />
      </filter>
      <filter id="filter12871">
        <feGaussianBlur id="feGaussianBlur12873" stdDeviation={0.581} />
      </filter>
      <filter id="filter12875">
        <feGaussianBlur id="feGaussianBlur12877" stdDeviation={0.581} />
      </filter>
      <filter id="filter12879">
        <feGaussianBlur id="feGaussianBlur12881" stdDeviation={0.581} />
      </filter>
      <filter id="filter12883">
        <feGaussianBlur id="feGaussianBlur12885" stdDeviation={0.581} />
      </filter>
      <filter id="filter12887">
        <feGaussianBlur id="feGaussianBlur12889" stdDeviation={0.581} />
      </filter>
      <filter id="filter12891">
        <feGaussianBlur id="feGaussianBlur12893" stdDeviation={0.581} />
      </filter>
      <filter id="filter12895">
        <feGaussianBlur id="feGaussianBlur12897" stdDeviation={0.581} />
      </filter>
      <filter id="filter12899">
        <feGaussianBlur id="feGaussianBlur12901" stdDeviation={0.581} />
      </filter>
      <filter id="filter12903">
        <feGaussianBlur id="feGaussianBlur12905" stdDeviation={0.581} />
      </filter>
      <filter id="filter12907">
        <feGaussianBlur id="feGaussianBlur12909" stdDeviation={0.581} />
      </filter>
      <filter id="filter12911">
        <feGaussianBlur id="feGaussianBlur12913" stdDeviation={0.581} />
      </filter>
      <filter id="filter12915">
        <feGaussianBlur id="feGaussianBlur12917" stdDeviation={0.581} />
      </filter>
      <filter id="filter12919">
        <feGaussianBlur id="feGaussianBlur12921" stdDeviation={0.581} />
      </filter>
      <filter id="filter12923">
        <feGaussianBlur id="feGaussianBlur12925" stdDeviation={0.581} />
      </filter>
      <filter id="filter12927">
        <feGaussianBlur id="feGaussianBlur12929" stdDeviation={0.581} />
      </filter>
      <filter id="filter12931">
        <feGaussianBlur id="feGaussianBlur12933" stdDeviation={0.581} />
      </filter>
      <filter id="filter12935">
        <feGaussianBlur id="feGaussianBlur12937" stdDeviation={0.581} />
      </filter>
      <filter id="filter12939">
        <feGaussianBlur id="feGaussianBlur12941" stdDeviation={0.581} />
      </filter>
      <filter id="filter12943">
        <feGaussianBlur id="feGaussianBlur12945" stdDeviation={0.581} />
      </filter>
      <filter id="filter12947">
        <feGaussianBlur id="feGaussianBlur12949" stdDeviation={0.581} />
      </filter>
      <filter id="filter12951">
        <feGaussianBlur id="feGaussianBlur12953" stdDeviation={0.581} />
      </filter>
      <filter id="filter12955">
        <feGaussianBlur id="feGaussianBlur12957" stdDeviation={0.581} />
      </filter>
      <filter id="filter12959">
        <feGaussianBlur id="feGaussianBlur12961" stdDeviation={0.581} />
      </filter>
      <filter id="filter12963">
        <feGaussianBlur id="feGaussianBlur12965" stdDeviation={0.581} />
      </filter>
      <filter id="filter12967">
        <feGaussianBlur id="feGaussianBlur12969" stdDeviation={0.581} />
      </filter>
      <filter id="filter12971">
        <feGaussianBlur id="feGaussianBlur12973" stdDeviation={0.581} />
      </filter>
      <filter id="filter12975">
        <feGaussianBlur id="feGaussianBlur12977" stdDeviation={0.581} />
      </filter>
      <filter id="filter12979">
        <feGaussianBlur id="feGaussianBlur12981" stdDeviation={0.581} />
      </filter>
      <filter id="filter12983">
        <feGaussianBlur id="feGaussianBlur12985" stdDeviation={0.581} />
      </filter>
      <filter id="filter12987">
        <feGaussianBlur id="feGaussianBlur12989" stdDeviation={0.581} />
      </filter>
      <filter id="filter12991">
        <feGaussianBlur id="feGaussianBlur12993" stdDeviation={0.581} />
      </filter>
      <filter id="filter12995">
        <feGaussianBlur id="feGaussianBlur12997" stdDeviation={0.581} />
      </filter>
      <filter id="filter12999">
        <feGaussianBlur id="feGaussianBlur13001" stdDeviation={0.581} />
      </filter>
      <filter id="filter13003">
        <feGaussianBlur id="feGaussianBlur13005" stdDeviation={0.581} />
      </filter>
      <filter id="filter13007">
        <feGaussianBlur id="feGaussianBlur13009" stdDeviation={0.581} />
      </filter>
      <filter id="filter13011">
        <feGaussianBlur id="feGaussianBlur13013" stdDeviation={0.581} />
      </filter>
      <filter id="filter13015">
        <feGaussianBlur id="feGaussianBlur13017" stdDeviation={0.581} />
      </filter>
      <filter id="filter13019">
        <feGaussianBlur id="feGaussianBlur13021" stdDeviation={0.581} />
      </filter>
      <filter id="filter14319">
        <feGaussianBlur id="feGaussianBlur14321" stdDeviation={0.219} />
      </filter>
      <marker
        id="CurvyCross"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <g id="g3984" transform="scale(.6)">
          <path
            id="path3986"
            d="M4.625-5.046c-2.76 0-5 2.24-5 5s2.24 5 5 5"
            style={{
              fill: "none",
              fillRule: "evenodd",
              stroke: "#000",
              strokeWidth: "1pt",
              markerStart: "none",
              markerEnd: "none",
            }}
          />
          <path
            id="path3988"
            d="M-5.413-5.046c2.76 0 5 2.24 5 5s-2.24 5-5 5"
            style={{
              fill: "none",
              fillRule: "evenodd",
              stroke: "#000",
              strokeWidth: "1pt",
              markerStart: "none",
              markerEnd: "none",
            }}
          />
        </g>
      </marker>
      <marker
        id="DiamondMend"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          id="path3894"
          d="M0-7.071-7.071 0 0 7.071 7.071 0 0-7.071z"
          style={{
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: "1pt",
            markerStart: "none",
          }}
          transform="matrix(.4 0 0 .4 -2.6 0)"
        />
      </marker>
      <marker
        id="EmptyTriangleOutL"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          id="path3954"
          d="m5.77 0-8.65 5V-5l8.65 5z"
          style={{
            fill: "#fff",
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: "1pt",
            markerStart: "none",
          }}
          transform="matrix(.8 0 0 .8 -4.8 0)"
        />
      </marker>
      <marker
        id="Club"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          id="path4023"
          d="M-1.597-7.098A3.43 3.43 0 0 0-5.024-3.67c0 .656.239 1.227.56 1.748-.039.032-.08.058-.117.093-.622-.855-1.59-1.445-2.727-1.445A3.43 3.43 0 0 0-10.734.15a3.43 3.43 0 0 0 3.426 3.427c.994 0 1.869-.442 2.494-1.12-.124.356-.21.722-.21 1.12a3.43 3.43 0 0 0 3.427 3.426 3.43 3.43 0 0 0 3.426-3.426c0-.794-.315-1.494-.769-2.075 1.355.263 2.712.794 3.706 2.331-.738-.738-1.212-2.08-1.212-3.893l-.63-.046.583-.023c0-1.812.451-3.155 1.19-3.893-.96 1.482-2.258 2.026-3.567 2.308.404-.562.7-1.214.7-1.958a3.43 3.43 0 0 0-3.427-3.427z"
          style={{
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: ".74587913pt",
            markerStart: "none",
          }}
          transform="scale(.6)"
        />
      </marker>
      <marker
        id="Torso"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <g id="g4006" transform="scale(.7)">
          <path
            id="path4008"
            d="M-4.78-3.24C-2.428-2.874.522-1.302.259.388c-.263 1.69-2.47 2.23-4.821 1.864-2.35-.366-3.958-1.5-3.695-3.19.263-1.69 1.128-2.667 3.479-2.302z"
            style={{
              fill: "none",
              fillOpacity: 0.75,
              fillRule: "evenodd",
              stroke: "#000",
              strokeWidth: 1.25,
              markerStart: "none",
              markerMid: "none",
              markerEnd: "none",
            }}
          />
          <path
            id="path4010"
            d="M4.46.089c-7.016-4.467.765-3.995-5.308-8.809"
            style={{
              fill: "none",
              fillOpacity: 0.75,
              fillRule: "evenodd",
              stroke: "#000",
              strokeWidth: "1pt",
              markerEnd: "none",
            }}
          />
          <path
            id="path4012"
            d="M4.93.058c-6.317 1.691-3.127 5.42-9.875 7.488"
            style={{
              fill: "none",
              fillOpacity: 0.75,
              fillRule: "evenodd",
              stroke: "#000",
              strokeWidth: "1pt",
              markerStart: "none",
              markerEnd: "none",
            }}
          />
          <path
            id="rect4014"
            d="M-10.392-1.741h2.637V1.02h-2.637z"
            style={{
              fillRule: "evenodd",
              strokeWidth: "1pt",
              markerEnd: "none",
            }}
            transform="matrix(.52754 -.84953 .88767 .46048 0 0)"
          />
          <path
            id="rect4016"
            d="M4.959-7.963h2.733v2.861H4.959z"
            style={{
              fillRule: "evenodd",
              strokeWidth: "1pt",
              markerEnd: "none",
            }}
            transform="matrix(.6712 -.74127 .7908 .61207 0 0)"
          />
          <path
            id="path4018"
            d="M16.78-28.685a.607.607 0 1 1-1.215 0 .607.607 0 1 1 1.215 0z"
            style={{
              fill: "red",
              fillOpacity: 0.75,
              fillRule: "evenodd",
              stroke: "#000",
              strokeWidth: "1pt",
              markerStart: "none",
              markerEnd: "none",
            }}
            transform="matrix(0 -1.10952 1.10952 0 25.966 19.716)"
          />
          <path
            id="path4020"
            d="M16.78-28.685a.607.607 0 1 1-1.215 0 .607.607 0 1 1 1.215 0z"
            style={{
              fill: "red",
              fillOpacity: 0.75,
              fillRule: "evenodd",
              stroke: "#000",
              strokeWidth: "1pt",
              markerStart: "none",
              markerEnd: "none",
            }}
            transform="matrix(0 -1.10952 1.10952 0 26.825 16.991)"
          />
        </g>
      </marker>
      <marker id="RazorWire" orient="auto" refX={0} refY={0}>
        {'style="overflow:visible">'}
        <path
          id="path4026"
          d="M.023-.74V.697L-7.76 3.01H10.68L3.491.697V-.74l7.25-2.156H-7.727L.023-.74z"
          style={{
            fill: "gray",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: ".1pt",
          }}
          transform="scale(.8)"
        />
      </marker>
      <marker
        id="InfiniteLineStart"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <g id="g4038" transform="translate(-13)">
          <circle id="circle4040" cx={3} cy={0} r={0.8} />
          <circle id="circle4042" cx={6.5} cy={0} r={0.8} />
          <circle id="circle4044" cx={10} cy={0} r={0.8} />
        </g>
      </marker>
      <marker
        id="Scissors"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          id="schere"
          d="M9.09-3.606c-.97-1.171-2.72-1.13-4.028-.627L-3.15-1.155c-2.388-1.307-4.748-.932-4.748-1.569 0-.497.456-.388.388-1.683-.066-1.243-1.364-2.163-2.59-2.081-1.228-.008-2.5.933-2.51 2.23-.092 1.306 1.006 2.52 2.306 2.605 1.522.226 4.218-.696 5.483 1.57-.942 1.739-2.614 1.744-4.126 1.657-1.254-.073-2.762.287-3.36 1.52-.579 1.183-.011 2.865 1.317 3.227 1.34.492 3.18-.13 3.499-1.67.246-1.189-.595-1.747-.273-2.178.244-.325 1.791-.137 4.548-1.375l8.892 3.135c1.124.314 2.497.303 3.492-.802L-.052-.054 9.09-3.606zm-18.308-1.9c1.295.722 1.189 2.683-.156 3.063-1.217.423-2.771-.76-2.384-2.078.228-1.082 1.654-1.48 2.54-.986zm.056 8.017c1.351.499 1.122 2.784-.252 3.091-.91.317-2.213-.138-2.306-1.212-.177-1.305 1.357-2.484 2.558-1.88z"
          style={{
            markerStart: "none",
          }}
        />
      </marker>
      <marker
        id="Arrow1Mend"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          id="path3802"
          d="m0 0 5-5-17.5 5L5 5 0 0z"
          style={{
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: "1pt",
            markerStart: "none",
          }}
          transform="matrix(-.4 0 0 -.4 -4 0)"
        />
      </marker>
      <marker
        id="DotL"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          id="path3855"
          d="M-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z"
          style={{
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: "1pt",
            markerStart: "none",
            markerEnd: "none",
          }}
          transform="matrix(.8 0 0 .8 5.92 .8)"
        />
      </marker>
      <marker
        id="Arrow1Lstart"
        orient="auto"
        refX={0}
        refY={0}
        style={{
          overflow: "visible",
        }}
      >
        <path
          id="path3793"
          d="m0 0 5-5-17.5 5L5 5 0 0z"
          style={{
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: "1pt",
            markerStart: "none",
          }}
          transform="matrix(.8 0 0 .8 10 0)"
        />
      </marker>
      <linearGradient id="linearGradient11165">
        <stop
          id="stop11167"
          offset={0}
          style={{
            stopColor: "#000",
            stopOpacity: 0,
          }}
        />
        <stop
          id="stop11173"
          offset={0.5}
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <stop
          id="stop11171"
          offset={1}
          style={{
            stopColor: "#000",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient id="linearGradient10542">
        <stop
          id="stop10544"
          offset={0}
          style={{
            stopColor: "#810000",
            stopOpacity: 1,
          }}
        />
        <stop
          id="stop10546"
          offset={1}
          style={{
            stopColor: "#810000",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient id="linearGradient10534">
        <stop
          id="stop10536"
          offset={0}
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <stop
          id="stop10538"
          offset={1}
          style={{
            stopColor: "#000",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient id="linearGradient10318">
        <stop
          id="stop10320"
          offset={0}
          style={{
            stopColor: "#810000",
            stopOpacity: 1,
          }}
        />
        <stop
          id="stop10322"
          offset={1}
          style={{
            stopColor: "#000",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
    </defs>
    <g
      id="layer3"
      style={{
        display: "inline",
      }}
      transform="translate(-167.997 -118.555)"
    >
      <path
        id="path2900"
        d="M486.75 253a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter7968)",
        }}
      />
      <path
        id="path2902"
        d="m485.5 253 13-19"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter7972)",
        }}
      />
      <path
        id="path2904"
        d="M500 234a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter7976)",
        }}
      />
      <path
        id="path2906"
        d="m498.5 234 23.25 13.5"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter7980)",
        }}
      />
      <path
        id="path2908"
        d="M523.25 247.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter7984)",
        }}
      />
      <path
        id="path2910"
        d="m521.75 247.5-.25 34.25"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4.8,1.2",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter7988)",
        }}
      />
      <path
        id="path2912"
        d="M523 281.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter7992)",
        }}
      />
      <path
        id="path2914"
        d="M521.5 281.75 485.25 253"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter7996)",
        }}
      />
      <path
        id="path2918"
        d="m485.5 253 36.25-5.25"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8000)",
        }}
      />
      <path
        id="path4638"
        d="M491.75 315.125a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8004)",
        }}
      />
      <path
        id="path4640"
        d="m490.25 315.125-7.5-12.5"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8008)",
        }}
      />
      <path
        id="path4642"
        d="M484.375 302.625a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8012)",
        }}
      />
      <path
        id="path4644"
        d="M564.357 371.313a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8016)",
        }}
      />
      <path
        id="path4646"
        d="m562.857 371.313 1.414 18.208"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8020)",
        }}
      />
      <path
        id="path4648"
        d="M565.948 389.521a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8024)",
        }}
      />
      <path
        id="path4650"
        d="M629.057 431.948a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8028)",
        }}
      />
      <path
        id="path4652"
        d="m627.557 431.594-8.131 12.551"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8032)",
        }}
      />
      <path
        id="path4654"
        d="M620.926 444.145a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8036)",
        }}
      />
      <path
        id="path4656"
        d="M793.813 431.77a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8040)",
        }}
      />
      <path
        id="path4658"
        d="m792.49 431.77 7.425 24.926"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8044)",
        }}
      />
      <path
        id="path4660"
        d="M801.415 456.696a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8048)",
        }}
      />
      <path
        id="path4662"
        d="m799.915 457.05 18.738 4.066"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8052)",
        }}
      />
      <path
        id="path4664"
        d="M477.03 430.533a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8056)",
        }}
      />
      <path
        id="path4666"
        d="m475.53 430.533-25.81 7.425"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8060)",
        }}
      />
      <path
        id="path4668"
        d="M451.22 437.958a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8064)",
        }}
      />
      <path
        id="path4670"
        d="M401.75 179.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8068)",
        }}
      />
      <path
        id="path4672"
        d="m400.25 179.75-15.5 37.5"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8072)",
        }}
      />
      <path
        id="path4674"
        d="M386.25 217.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8076)",
        }}
      />
      <path
        id="path4676"
        d="m400.25 179.5-68 50.25"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8080)",
        }}
      />
      <path
        id="path4678"
        d="M333.75 229.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8084)",
        }}
      />
      <path
        id="path4680"
        d="m400.25 179.5-36.75 8.25"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8088)",
        }}
      />
      <path
        id="path4682"
        d="M365 187.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8092)",
        }}
      />
      <path
        id="path4684"
        d="M473.5 214.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8096)",
        }}
      />
      <path
        id="path4686"
        d="m472 214.5-20.5-17.75"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8100)",
        }}
      />
      <path
        id="path4688"
        d="M453 197a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8104)",
        }}
      />
      <path
        id="path4690"
        d="M824.926 275.854a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8108)",
        }}
      />
      <path
        id="path4692"
        d="m823.426 275.854 22.627 18.738"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8112)",
        }}
      />
      <path
        id="path4694"
        d="M847.553 294.592a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8116)",
        }}
      />
      <path
        id="path4696"
        d="m846.053 294.592-32.173 5.303"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8120)",
        }}
      />
      <path
        id="path4698"
        d="M815.38 299.895a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8124)",
        }}
      />
      <path
        id="path4700"
        d="M824.572 462.883a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8128)",
        }}
      />
      <path
        id="path4702"
        d="m823.072 462.883-.707 47.73"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8132)",
        }}
      />
      <path
        id="path4704"
        d="M823.865 510.613a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8136)",
        }}
      />
      <path
        id="path4706"
        d="m822.365 510.613-11.314-8.485"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8140)",
        }}
      />
      <path
        id="path4708"
        d="M812.5 502.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8144)",
        }}
      />
      <path
        id="path4710"
        d="M838.25 498.625a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8148)",
        }}
      />
      <path
        id="path4712"
        d="M836.75 498.625 823 462.875"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8152)",
        }}
      />
      <path
        id="path4714"
        d="M625.522 498.946a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8156)",
        }}
      />
      <path
        id="path4716"
        d="m624 499 8.25 45.75"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8160)",
        }}
      />
      <path
        id="path4718"
        d="M633.75 544.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8164)",
        }}
      />
      <path
        id="path4720"
        d="M632.25 544.75 610 560.25"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8168)",
        }}
      />
      <path
        id="path4722"
        d="M611.5 560.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 1 1 3 0z"
        style={{
          fill: "#000",
          stroke: "none",
          strokeWidth: 1,
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          filter: "url(#filter8172)",
        }}
      />
      <path
        id="path4724"
        d="M196.222 216.28h-18.385"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8176)",
        }}
      />
      <path
        id="path4726"
        d="m846.407 218.932 43.84.353"
        style={{
          fill: "none",
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "4,1",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          filter: "url(#filter8180)",
        }}
      />
    </g>
    <g
      id="layer2"
      style={{
        opacity: 1,
        display: "inline",
      }}
      transform="translate(-167.997 -118.555)"
    >
      <path
        id="path2406"
        d="M869.741 495.587s1.591-.177 1.768 2.298c.177 2.475.884 4.596.884 5.657 0 1.06.707 4.95.707 4.95s1.238 1.414 1.945.884c.707-.53 1.767-.707 1.767-1.945 0-1.237.354-2.651.708-1.944.353.707 1.414 1.237 1.414 2.298 0 1.06-.177 2.121 0 3.182.177 1.06 1.237 2.121 1.237 2.121s.354 2.121.354 2.828c0 .708.353 1.238 0 3.006-.354 1.767-.354 1.944-.177 3.535.177 1.591.354 2.298 1.06 2.475.708.177.708.177 1.415.177.707 0 .884-.707 1.414.177.53.883.707 1.414 1.945 1.59 1.237.177 2.298 0 2.298 0s.53.884.53 1.945c0 1.06-.177 1.414.177 2.829.353 1.414.353 1.59 1.237 1.767.884.177 1.414.354 1.414.354s.177.884.177 2.298c0 1.414.354 2.298.354 2.298l1.414 1.06s.354.885 1.06 1.769c.708.883 1.415 1.06 1.415 1.06s.53 1.06.707 1.945c.177.884-.354.353.707 1.59 1.06 1.238 1.237 1.592 1.237 2.652 0 1.061.884 1.768.53 3.182-.353 1.415-.176 1.945-.353 3.713-.177 1.767.177-.354-.177 2.651-.353 3.005-.176 3.89-.353 4.95s-.53.177-.707 2.121c-.177 1.945-.354 3.536-.354 3.536s-1.237 1.768-2.121 1.768c-.884 0-2.475-.707-2.475.176 0 .884-.884 1.591.354 1.945 1.237.354 1.59-.707 1.59.53 0 1.238-.353 1.591-1.414 2.475-1.06.884-1.06.707-2.298 1.414-1.237.707-.53-.353-1.414 1.945-.884 2.298-.707 2.298-1.414 3.182-.707.884-.884.884-1.238 1.944-.353 1.061-.353 1.415-.353 2.652 0 1.238-.354 1.768-.354 1.768s-1.414 1.414-1.414 2.652c0 1.237.884 1.767.177 2.651-.707.884 0 .884-1.591 1.06-1.591.178-2.298.178-2.298.178l-2.475.53s-.354-1.06-1.237-.53c-.884.53-.53.353-1.238 1.237-.707.884-.884.884-1.768 1.414-.884.53 0 .707-.53 1.591s-.707 1.768-1.768 1.238c-1.06-.53-1.414-.354-1.768-1.415-.353-1.06.177-1.237-1.59-1.767-1.768-.53-1.945-.53-1.945-.53s-.53.353-.884 1.237c-.354.884.177 1.237-1.06 1.768-1.238.53-1.238 1.06-2.476.176-1.237-.884-.883-1.237-1.59-1.59-.708-.354-.53 0-1.238-.708-.707-.707-2.652-3.358-2.828-4.42-.177-1.06-.707-1.06-.177-2.474.53-1.414.53-2.475-.354-3.005-.884-.53-1.06-.354-1.06-1.414 0-1.061.707-3.182-.177-3.36-.884-.176-.884-.883-1.591.178-.707 1.06-2.475 3.712-2.652 2.298-.177-1.415-.707-1.238.354-2.475 1.06-1.238 1.06-1.414 1.944-2.298.884-.884 1.591-1.238 1.945-2.475.353-1.238 1.59-3.359.353-3.536-1.237-.176-1.944-1.767-2.298.53-.353 2.299.707 2.83-.884 3.36-1.59.53-1.414-.53-2.474 1.06-1.061 1.591-2.299 3.359-2.299 3.359s-.707 0-2.12-2.475c-1.415-2.475-1.592-2.652-1.592-4.066 0-1.414.53-1.59-.353-2.121-.884-.53-1.591-1.768-2.829-1.945-1.237-.177-1.06-.353-3.005-.353h-3.005c-1.945 0-1.945-.53-3.005.53-1.061 1.06-.884 1.414-2.299 1.591-1.414.177-1.767-.177-2.474.53-.707.707-2.475 1.061-3.182 1.061-.707 0-2.298.354-2.829 1.591-.53 1.237-.53 1.414-.53 2.121 0 .707 1.06 1.945.177 2.298-.884.354-1.945.53-2.652.53-.707 0-1.768 0-2.121-.706-.354-.708.53-.884-1.061-.884h-1.591s-.53-.53-2.475.176c-1.944.708-2.121 1.238-3.359 1.945-1.237.707-.53-.177-1.59.884-1.061 1.06-1.592 1.59-2.299 1.944-.707.354-.353.177-1.59.708-1.238.53-.531.707-2.122 1.59-1.591.884-1.591.884-3.182 1.061-1.591.177-1.414 1.238-3.005.354s-.884-.884-1.945-1.768c-1.06-.884-2.121-1.414-3.005-2.121-.884-.707-1.414-.354-.884-1.768.53-1.414.354-1.414 1.06-2.298.708-.884 1.415 0 1.592-2.122.177-2.12-.177-1.767.177-2.828.353-1.06 1.237-.707.883-2.475-.353-1.768-.353-2.298-1.06-2.828-.707-.53-1.945-1.414-1.945-1.414s-1.06.707-1.237-1.591c-.177-2.299-.177-1.768-.177-3.536s.53-1.945-.353-3.89c-.884-1.944-1.415-1.59-1.945-2.827-.53-1.238-.707-1.768-.884-3.006-.177-1.237-.707-1.06-.177-2.121.53-1.06 1.061-1.237 1.061-1.237v-1.238c0-1.237-.884-1.768.707-1.768s2.121.707 1.768 0c-.354-.707 0-2.828 0-2.828s-1.06.884-1.591-.53c-.53-1.415-1.06-1.768-.53-3.006.53-1.237.883-1.237 1.06-2.651.177-1.414-1.59-1.768.354-3.005 1.944-1.238 1.06-1.238 3.005-1.415 1.944-.176 1.237.53 2.475-.707 1.237-1.237 1.768-1.59 2.828-2.475 1.06-.884.707-1.944 2.298-2.121 1.591-.177.354-.354 2.475-.177 2.122.177 2.652.707 3.713-.353 1.06-1.061 2.828-2.829 3.889-3.536 1.06-.707 1.237.177 2.12-1.59.885-1.769-.176-1.769 1.238-3.006 1.415-1.237 1.591-.177 2.652-1.591 1.06-1.414.177-2.121 1.768-2.121 1.59 0 1.59 1.59 2.121-.177.53-1.768-1.237-1.768.707-2.475 1.945-.707 3.536.354 3.89-.884.353-1.237.883-3.005.883-3.005s2.122-1.238 2.829-1.591c.707-.354 1.414-2.829 2.298-2.298.884.53 2.475 1.59 2.475 1.59l2.12 1.238s.178.53.708-1.59c.53-2.122.177-3.183.884-4.774.707-1.59 1.06-1.414 2.475-2.121 1.414-.707 1.768-1.06 2.121-1.768.354-.707 1.414-.884 2.475-.707 1.06.177 1.591.707 2.475-.53.884-1.238.707-1.591 1.59-1.238.885.354.354.354 1.592.707 1.237.354 2.475.884 4.95.354 2.474-.53 2.651-1.768 2.828-.354.177 1.415.177 1.591 1.06 1.591.885 0 .885.177.354 1.238-.53 1.06-.177.353-1.59 2.298-1.415 1.945-2.122 2.121-2.299 3.535-.177 1.415.177 2.299.177 2.299s-.707 1.944.53 1.944c1.238 0 1.414-.53 3.005-.707 1.591-.177 3.006-.354 3.182 1.237.177 1.591 1.238 4.597 2.299 4.773 1.06.177 1.06.53 2.828.177 1.768-.353 2.475.53 2.652-1.06.176-1.591.176-1.945.176-3.182 0-1.238-1.767.707.53-2.829 2.299-3.535 2.83-1.237 2.299-5.126-.53-3.89-1.591-3.536-.707-6.01.884-2.476.53-2.476 1.06-2.299z"
        style={{
          fill: "#7b147d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path2388"
        d="M212.132 178.98s2.828-3.182 4.596-2.828c1.768.353 3.89 0 5.657-1.415 1.768-1.414 4.596-.707 4.596-.707l2.122 1.768s2.828 2.828 4.596 1.768c1.768-1.06 1.768 1.768 4.95 2.121 3.182.354 4.596 1.06 7.778 2.121 3.182 1.061 6.01-1.767 9.192-.353 3.182 1.414 8.132 3.889 9.546 2.828 1.414-1.06 1.06-2.475 4.243-2.121 3.182.354 5.657-.707 5.657-.707s-.354-2.121 1.767-1.768c2.122.354 4.596-.707 4.596-.707l3.182-.707h2.475l.354 2.475s4.596-.707 7.071 1.414c2.475 2.121 7.071 6.01 8.132 3.89 1.06-2.122-1.415 3.888 3.182 4.242 4.596.353 3.535-3.182 5.657-2.475 2.12.707 3.889 1.414 6.01.353 2.121-1.06 4.596-4.242 6.717-2.474 2.122 1.767 10.254 2.828 9.9 1.414-.354-1.414 0-5.304 0-5.304h2.828l.354 3.89s4.243.353 4.95-1.768c.707-2.122-1.415-2.829-1.415-2.829s-1.767-2.475.354-6.717c2.121-4.243 3.536-4.243 3.536-7.425 0-3.182 4.242 0 4.242 0l.707-2.828s3.536-1.06 3.536.353c0 1.415-1.414 1.061-1.768 3.536-.353 2.475-3.182 1.06-3.182 1.06s-4.243 6.718-2.828 7.425c1.414.707 2.121 3.89 1.767 6.01-.353 2.122.708-1.06 1.415 1.061.707 2.122 4.596 0 4.95 1.414.353 1.415-3.536 2.829.353 3.536 3.889.707 3.535-.354 4.95-1.414 1.414-1.06 1.767-4.243 3.182-2.122 1.414 2.122 0 3.182 0 3.182l2.121.708s-1.414 1.06-.707 2.474c.707 1.415 2.828 0 0 2.829-2.829 2.828-5.657 1.768-5.657 1.768s-1.414 3.535-2.828 3.889c-1.415.353-.708 2.475-2.829 2.475-2.121 0-2.828-1.415-2.828-1.415l-2.122-1.767-.707 2.12s3.182 3.183 1.768 4.244c-1.414 1.06-4.596 1.414-4.596 1.414s-9.9 10.253-10.607 12.728c-.707 2.475-1.06 9.192-1.06 9.192l1.767 1.414s1.415 2.475 3.182 4.243c1.768 1.768 2.829 5.303 5.657 4.596 2.829-.707 3.89 2.475 3.89 2.475l2.12-1.414s2.122-1.238 2.476-.53c.353.707 2.474 1.414 2.474 1.414s2.122-1.238 4.066-1.415c1.945-.176.354 1.591.354 1.591l-4.066 1.945s.884 2.652 1.944 2.298c1.061-.353 1.591 4.066.354 4.95-1.237.884.354 2.651.354 2.651l.707 2.475 1.944 1.415.53 2.298s.708-3.713 1.945-4.597c1.238-.883 1.945-5.656 1.414-6.717-.53-1.06-1.414-1.414-.707-3.005s.354-4.243 2.122-3.713c1.767.53 3.535.354 3.889-.883.353-1.238-.177-1.238 0-2.299.176-1.06 1.06-1.414 1.767-1.59.708-.177 1.238.353.708-2.122-.53-2.475 0-1.414-.708-3.182-.707-1.768-.176-.707-.883-2.298-.708-1.59-1.238-4.066.53-4.243 1.768-.176-.177-2.298 1.06-2.828 1.238-.53 3.536.177 3.006-1.945-.53-2.12-3.182-6.363-1.414-6.54 1.767-.177 4.281.725 4.281.725l6.25.375s-.625 2.375 1.25 2.625 2.125 1.375 2.75 1.75 1.625 1.25 1.375 1.75-.25 1-.125 1.875.75 2.125.25 2.375-1 1-.875 2 .5 2.5.5 2.5 1 1.375 2.25.75.875-1.125 2.5-1.875 1.625.875 2.625-.75.875-1.875 1.125-2.5 1.5-2.25 2.5-1.75-.317 4.999.744 6.59c1.06 1.59 2.506-.59 2.631.16s.25 1.625.375 2.25-.75 1.125 0 2.125.875 1.25.75 2 .375 1.375.375 1.375 1.375-1.25 2 .25.125 2.375 1.25 2.375 2.375 1.75 2.375 1.75l.5 2.625 2.875-2 2.75.875s-3.813 1.75-3.063 3.563c.75 1.812 4.625-2.125 4.563.312-.063 2.438-.5 4.938-1.438 5.063-.937.125-2.437.937-2.562 1.5-.125.562-1.875 1.687-3 1.937s.625 1.25-1.75 1.625-3.125.25-3.625.25-.5.5-1.125 1.625-.125 1.5-.75 2 2.25 0-1.625.875-4.5 1.125-4.5 1.125-.25.375-1.5.375-1.75-.625-1.75-.625-.25-.625-2-.625-3.375 1.625-3.375 1.625-.5.625-1.5.75-2.375 1.375-2.375 1.375-1.375.375-1 1.875S385.125 271 386 270s2.25-5 4.125-4.625S394.5 266.5 394 269.25s-.625 2.25-.25 3.625 1.25 2.125 1.125 3.375-1.25.875.125 2 2.875 2.875 3.375 1.25 1.125-2.75 1.75-2.5 2.375-.5 1.125 2-1 2.625-2.125 3.375-1-1.25-3 1.75-1 3.625-3.125 4.5-2.5 3.625-3.25 2.5-1.75-1.125-.875-2.75 1.5-1.375 1.25-2.875.75-1.625-.5-1.75-.625-.125-2.125.375-1.375-1.125-2.625.875-1.625 1.875-2.5 2.375-.5 1.125-1.125 1.875-.875 1.125-1.375 1.75-.625.625-.625 2 1.125 3.625 1.125 3.625-.625 1.75-1.375 2.125-.875-.875-4.125 2.875-2.875 4.125-4.875 5-1.75 1-1.875 1.5-1.5 1.125-.75 2.25 0 1.375 1.125 1.875 2.25-.5 2.125 1.125-1.375 3.25-3.375 4.5-4.625 5.125-7.25 5.75-3.75 1.5-3.625 2.75 0 2.75-1.375 2.75-.5.625-.5 3.625.25 3.875.875 5 .875 1.125.875 2.875 0 3-.125 3.5 1 .375-.875 1.5-3.5 1.75-4.25-.125-2.25-1.375-2.375-2.875.5-5.125.5-5.125-1.875-.5-2.125-1.5-1-3.375-1.5-3.75-1.5-1.25-2.5-.75-2.75 1.5-3.375 1.375S340.5 333 337 332s-5.125-1.5-6.625-1.625-5-.125-5.625 0-6.625 1.5-7.375 1.5-6 1.25-7.375 2.375-1.25 3-2.75 3.625-2 .875-2 .875-1.5 1.75-1.625 2.75-1.375 2.75-2 3.125-.75.25-.375 1.375c-.501 2.793-.886 5.47.25 6.625l.125 2.25 1.5 2.625s2.25 3.25 5.125 2.375 1.5-.25 3.875-1.375 1.625 1.25 2.875-1.25.375-2.75 1.75-3.25.625-1 2.375-.5.125.625 2.375.75 2.5-2.375 2.25.5-.5 3-.75 3.75.375-.125-.5 1.5-1.375 1.75-2 2.125-1 .625-1 1.75.25 2-.875 2.5-2.25-.125-2 1.25-.125 1.75.875 2.375 1.75.75 2.375 1.875.875 2.5.625 3-.125 2.125-.875 2.5-1.75.125-1.75 1.75.75 2.875 0 3.25-2-.5-2.25.375-.375 1.625-.5 2.375-.75.875-.75 1.375v1.625c0 1.375-.875 2.25.375 2.5s1.875.625 2.5.25 1.375-.5 1.875-.875 1.25-1.375 2-1.375 2.25.375 2.25.375.75 1.875.625 2.5.375.5.25 2-.125 2.625-.375 3.125-.625 1-.875 1.5 0 .5-.25 1.25.125 1.875-.5 1.375-.25-.5-.625-1-.625-1.125-1.375-2.375-.625-.5-2.125-1.25-1.375-1.625-2.375-1.125-.625 1.375-1.75.625-1.5-.75-2.125-1.75-.5-.875-.875-1.625-1.375-.25-1.375-1.625.375-1.625 0-2.375-.75-1.125-1-1.75-.375-.125-.375-1.375V382.5c0-.5-.5-2.5-.5-2.5l-.625-1.25s-.125-.125-.625-.875-.5-.375-.875-1.625-1.25-2.75-1.5-3.75-1.625-2.25-5.75-3.75-3.875-1.875-7.375-2.625-4.75-1.375-4.75-2.875 0-2-.875-2.5-1.75-.625-1.375-1.5 1-1 1.625-2.125.75-1.375.75-2.25.375-1-1-1.625-4.125-3-4.125-3 1.625-.375-1.875.125-3.75 2.5-4.75 1.25.75-5.625-.5-6.25-1.125.25-1.875-1.375-.125-3-.5-4.375 0 .75-1-3.875.875-3.375-1.375-6-5-2.375-5.25-4.5.375-4-.125-6.125-.75-1.625-.75-3.5-2.875-5.5-4.25-7.5-1.375-7.375-1.125-8.75-.25-6.375.625-8.5.875-5.125 1.5-8-.125-2.25 1.375-5.875 1.375-1.25 1.625-4.375 1.25-1.25 1.375-3.875.625-3.875-.25-5.125-2.125-.375-2.375-2.75 1-3.5-.375-6.125-1.375-1.5-1.625-3.5-1.375-2.125-2-3-.375-.125-.875-2.375-1.75-2.375-2.375-3.625-.5.125-.875-2-1.125-1.875-1.75-2.5-1.5-.75-1.125-1.875.625-1.125.25-2.25-2-1.75-2.5-2.875-.5-.25-.5-2 .5-2-1-2.5-2.5.75-3.25-.875-.625-.75-2.125-1-2.125-.125-2.625-1.125-.75-1.875-1.75-1.875-2.25-.375-2.5-1-1.625-2.375-2.5-2.375-.625.625-2 1.25 2.5 1.25-.5 2-4.375 1-5 .5-2.875 1.125-2.5-.75.5-1.625 1.125-2.125 2.375-.625 1.625-1.125-.375-1.375-3-.75-3.375.875-4.25 1.5-.875 1.875-1.25 2.625 1.125.5-1.75 1.75-1.375-.625-4.375 2-2 2.875-4.25 3.25-.875 0-2.625 1.875-1.5 2.75-3.25 2.75-1.125 3.125-2.75 1-2.75-1.25-1.5-2.25 1.5-.75 2.5-1 .5.375 1.625-1.25.875-2.25 2.625-2.375 1.5 1.5 2.25-.875 0-2.25 1.375-3.5 2.875-2.5 1.125-2.625-1.875-.5-3.5.25-1.75 1.125-3.25.875-1.875-.375-1.875-1-.625-2.625-.625-2.625 1.25-.625-.875-1.125-2.25 1.125-2.125-.5 1.125-1.375.25-2.125-1.125-1.25-2.25-.75-2.375 1.75-1.625-.125 2.25-2.625 2.75-3.375 1.25-2.875 1.5-4-1-.5.5-1.625.875-1.375 2.75-1.25 1.375 0 2.625.625 1.625 1 2.375.625 1.5-1.25 2-1.875 1.125-1 1.25-1.75.75-1.5-.625-1-.875.5-2.75.875-1.625 1.75-2.375.125-.875-2.375-.875-2.375-.75 0-.625-1.75-1.125-4.625 2.25-5.5 5.5-.125 5.625.375-1 1 .5 1.125 1.625.5 2.5-.75 1.875-1.125.875-1.625-1.875-.375-2.375-1.375 0-1.25-.5-2.625-.5-1.625-1.25-2.625-2.75-2.5-.25-3.125 5.125-1.25 4.632-.895z"
        style={{
          fill: "#b5b81d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path2432"
        d="M519.9 234.841c-.53-1.06 0-.883-.884-1.767-.884-.884-1.59-1.238-1.06-2.652.53-1.414-.354-2.298 1.06-2.652 1.415-.353 1.238 1.591 1.591-.883.354-2.475-.707-1.768.707-3.36 1.415-1.59 1.591-1.944 1.591-1.944s.884 0 1.238 1.238c.353 1.237.353 2.298 1.06 1.414.708-.884.884-1.945 1.415-2.652.53-.707 1.414-1.59 1.414-1.59s-1.591-2.652.354-2.476c1.944.177 1.944.53 2.474-.176.53-.708.354-.708 1.591-1.061 1.238-.354 1.415-.177 1.591-1.238.177-1.06.707-1.06 1.415-1.767.707-.707.707-1.06.883-2.475.177-1.414-.176-1.238 1.415-3.359 1.59-2.121 1.59-1.944 2.121-3.359.53-1.414.53-1.237 1.06-2.121.531-.884 1.238-.53 1.768-1.237.53-.708.708-1.591.708-1.591l.883-1.591s-1.767-.708-.176-1.415c1.59-.707 1.767-.883 3.005-1.237 1.237-.354 2.121-.354 2.121-.354s1.15 1.68 1.326.442c.177-1.237-.53-1.414.53-2.21 1.061-.795 1.68-.706 2.033-.441.354.265.177.53.973.353.795-.177 1.679.884 1.944-.353.265-1.238-1.149-2.21.53-2.917 1.68-.707 2.564-.089 3.094-.619.53-.53-.265-.795.796-1.326 1.06-.53 1.414-.265 2.474-.618 1.061-.354 1.15-1.503 1.68-1.591.53-.089 1.237 0 1.768.53.53.53-.973.972 1.149.619 2.12-.354 4.95-1.68 5.745-1.061.795.619.088 1.68 1.149 1.68 1.06 0 2.121-.443 2.652-.089.53.354.441.619 1.237.972.795.354.884.265 2.121.354 1.238.088.265-.354.973-.089.707.266.972.796 1.944 1.15.972.353 1.238.088 2.387.176 1.149.089.53.53 1.856.884s1.414.089 3.093.089c1.68 0 3.713-.089 4.685.176.972.265.795.884 2.121.796 1.326-.089 1.15-1.591 4.508.619 3.359 2.21 3.27 2.651 4.066 3.358.795.707 1.149 1.15 1.237 2.298.089 1.15.442 1.326-.088 1.945s-2.033 1.414-3.182 1.68c-1.15.264-3.27.706-4.154.706h-4.155c-2.21 0-5.038-.353-6.363-.53-1.326-.177-2.917.442-3.006.884-.088.442-.442.884-.088 1.237.353.354 1.237 1.238 2.033 1.591a4.122 4.122 0 0 1 1.59 1.238c.266.353 1.503.265 1.945.265.442 0 1.15.619 1.326 1.06.177.443-.088.885.177 1.238.265.354.795 0 .795 1.503v2.121c0 .707-.353 1.237.708 1.15 1.06-.09.795-.178 1.856-.178 1.06 0 .707 1.415 2.121-.088 1.414-1.503 1.591-1.591 1.414-1.945-.177-.353-.353-1.06-.972-2.033-.619-.972-1.68-1.679-.707-2.033.972-.353.265-1.325 1.59-.441 1.327.883.885 1.502 2.034 1.502 1.149 0 1.237.884 2.828-.619 1.591-1.502 1.414-2.032 2.387-2.12.972-.09 1.414.088 2.386-.443.972-.53 1.591-1.944 2.563-1.856.973.088 1.768.972 1.945.177.177-.796.53-1.15-.354-1.768-.883-.619-1.325-.354-1.59-1.149-.266-.796-.089-.884-.089-1.591s.707-1.945.088-2.652c-.618-.707-.795-.618-1.06-1.414-.265-.795-1.06-1.502-.177-1.59.884-.09.796-.266 2.033-.09 1.237.178 2.652-1.325 3.359-.618.707.707.707 1.06 1.326 1.945.618.883 1.06 1.414 1.679 1.679.619.265 1.237-.53.619.884-.62 1.414-.62.795-.62 1.856 0 1.06-.353 1.856 1.327.972 1.68-.884.972-.442 1.856-1.68.884-1.237 3.359-1.944 3.977-2.297.62-.354 3.006-2.652 3.006-2.652s.618-1.502 1.944-1.237c1.326.265 1.15.884 3.005-.884 1.856-1.768 1.856-2.122 3.182-1.238 1.326.884 1.238 1.15 2.298 1.15 1.061 0 2.299-.708 3.27-.354.973.353.885 1.856 2.21 1.237 1.326-.618 1.415.619 2.475-.972 1.061-1.591 1.415-1.856 1.768-2.563.354-.707 1.238-1.856 2.563-1.591 1.326.265 1.591.53 2.652.707 1.06.177 2.033.265 3.005.265.973 0 2.298-.795 3.005.088.708.884.973 1.415 1.68 1.857.707.442 1.414 7.16 1.414 7.16s.177 3.358-.354 4.065c-.53.707-.53 3.889-.53 3.889l-1.237 2.121-1.945 4.773s-1.237 3.89-1.06 4.773c.176.884 1.06 2.829 1.06 2.829s-1.06 1.59-.53 2.475c.53.883 1.237 3.182 1.237 4.419v4.773 4.066s1.768.353 1.768 1.237c0 .884 0 2.298-.707 3.536-.707 1.237-1.591 1.768-1.768 3.359a14.39 14.39 0 0 0 0 3.005l1.414.707 3.182 2.121s1.591 0 1.768 1.238c.177 1.237.884 1.767.177 3.182-.707 1.414-2.475 2.298-2.298 3.182.177.883.53 1.237.707 2.474.177 1.238.707 1.415.707 3.182 0 1.768 1.06 2.829 0 3.36-1.06.53-1.237.883-2.121 1.237-.884.353-4.066.353-4.243 1.59-.177 1.238-.353 1.592-1.06 3.006-.708 1.414-.884 1.768-1.768 1.944-.884.177-1.238 0-2.122-.176-.884-.177-2.475-.884-2.475-.884l-1.414-.177-1.237-1.238s-.707.53-1.414.884c-.708.354-2.299 1.768-2.299 1.768s-2.474.707-3.181.707c-.708 0-.708-.177-1.415 0-.707.177-1.944 0-2.475.707-.53.707.708 1.415-1.944 1.591-2.652.177-2.652.177-3.359.177-.707 0-1.944 3.712-1.944 3.712s1.414 1.238.353 1.591c-1.06.354-1.768 1.415-2.298 2.122-.53.707-.884 1.237-.707 2.121.177.884 0 1.414.353 2.475.354 1.06 1.238 3.182 1.238 3.182s.707.353.53 1.414c-.177 1.06-.707 1.591-.177 2.475.53.884 1.591 1.237 1.591 1.237l1.061 1.415s1.414-.354 1.414.884c0 1.237.177 1.767.354 3.182.177 1.414-.354 2.828-.354 2.828s-.353.707-1.414 1.06c-1.06.354-1.414.177-1.768.884-.353.708-.176.884-.353 1.768s-1.945 3.713-1.945 3.713l1.238-1.061s.707 1.06.53 2.121c-.177 1.06-.53 1.238-.354 1.945.177.707.884 1.06.884 1.06l1.061.354s1.243 1.427.993 2.927c-.25 1.5.375 1.75.5 2.375s-.25.25.5 1.75 1.25 1.5 2.375 1.875 1.625.375 1.625.375 1 1.25.25 1.75-1.375 0-1.5 1-.125 1.125-.125 2.625.25 2.375 0 2.875-.375.75-.375 1.5.875 1.375.875 1.375.625 1 .625 1.625-.25.875-.75 1.375-1.25.375-1.25.375-.875 0-1 .875 1.75.875-.375 1.25c0 0-1.25.125-1.875.25s-1.25-.25-1.875.25-.625.875-1.5 1-.75 0-1.75.125-1.75 1-1.75 1 .25.5-1.375.375-2.25.25-2.25.25 0 1.5-1.375.5-2-1-2-1.5.625-1 1.125-1.5 1-.75 1.375-1.25.625-1.25.625-1.25-.375 2.625-.75-.25 0-2.875-.75-3-.625.125-1.5-.625-1.375-1.375-1.875-1.75-.125-.875-1.25-.875-.5-.75-1.375-1.625-1.625-1.375-1.625-1.375l.625-1.5s-.125-.25-1.25-.125-1.375.125-1.875.375-.375 1.75-1 .625-.375-1.375-1-2-1.75-1.25-1.75-2 .75-1.5.125-1.75-1.125.375-1.375-.625-.625-1.75-.625-1.75l-.875-.5.5-1.25s.625-.75.75-1.625-1-.875.625-1.125 1.75.25 2.625-.625l1.5-1.5s.625-.75.25-1.25-.625-.75-1.25-.375-1 .875-1 .875-.25.25-1.625.25-.875-.25-2.125 0-1.75.375-2.375.625-1.125.25-1.875.5-.625.125-1.5.75-1.75 1.625-1.75 1.625-.5.25.125 1 1.375 1.5 2 1.5 1.125-.625 1.375-.125.75.875.375 1.75-.125.875-.75 1.375-1 .75-1.5 1-.75.25-1.25 1.125.25 2.75-1.25 2-.875-.625-1.875-1.25-1.375-.5-1.75-1.375-.375-1-.5-1.875-.375-1.5-.625-2.5-.125-1.5-.875-1.75-1.25-.75-2-.75-.125-.375-1.75 0-2.125.125-2.5.625-.625 2.875-.625 2.875.25.375-.5 1.125-1.75.875-1.75.875l-1 .75s-1.125.75-.625 1.5 1.125 1.375.875 1.875-.125.5-.75 1-1 .375-1 1.5.875 1.375.25 2.375-.375.875-.875 1.625-.75 1.375-1 2.125.5.875-.375 1.625-1.125.375-1.375 1.25.125.875-.375 1.5-.5 1-1 1.375-.5.25-1.125 1-.125 1.125-.625 1.75-.875.125-1.125 1 0 .5.125 1.375.75.875 0 1.875-1.125 1.625-1.625 2-.5-.125-.875 1 .25 1.5-.5 1.75-1.125.25-1.875.375-1.125-.125-1.625 0-.75 0-1.125.625-.75.5-.25 1.25.375.75.875 1.25l1.375 1.375c.5.5.875.75 1 1.375a6.38 6.38 0 0 1 .125 1.125s.625 1.875.125 2.125-1 .25-1.125 1-.25.5 0 1.375 0 .875.5 1.375.625.5 1.375 1.25 1.625.875 1.125 1.5-1.125.75-1.875.5-1.125.375-1.625-.75-.75-1.375-.75-1.375-.75.125-.75.75 1.875.75-.5.75-2.125.75-2.75 0-.125-1-1-1.25-1 .5-1.375-.25-.5-.75-.5-1.875.625-1.125.25-2.625-.625-1.125-.875-2 0-.875 0-2-.375-1.625-.375-1.625-.375-.25-.625-1.5-.125-1.375-.375-2.5-.125-1.5-.75-1.5-.25.5-1.25-.25-.5-1-1.375-1.375-1 .375-1.25-.875-.25-.625-.25-2.125v-2.625c0-.625.5-.625-.25-1.625s-.625-1.25-1.5-1.375-.625.875-1.375-.375-.875-2-1.875-2.25-.875.375-1.375-.25-.25-.75-.875-1.375.125-.875-1.5-.875-1.625-.875-2.5-.5-1.125 1-1.125 1.625 0 .625.125 1.5-.125 1.375.5 1.5.625-.5.75.625-.125 2.25 1.375 1.625 2.375-1.5 2.5-.75-.125.875.125 1.875 0 1.875.875 2.5 1.25.625 1.625 1.125.25.375.75.625.5 1.375 1.125 2.25 1.375.125 1 1.25-.375 1.625-.875 2-1.625.75-2.375.125-1.375-1.125-1.375-1.125.625-1.25-.875-.875-1.5.5-2.125.5-1-1-.75.375 1.25 1.875 1.25 1.875 1.125 0 1 1.25.375.875-.25 2.125-.5 1-1 2.125 0 1.125-.625 2-.875 1.375-1.75 1.75-.875-.375-1.25 1-.25 1.375-.875 1.625-2 .25-2.5.625.375.875-1 .5-1-.375-1.625-.5-.875-.125-1.375-.75-.125-1.75-.625-1.375-.875 1.75-1.375.375-.375-1.5-.875-1.75-.75 1.25-.875-.375-.375-1.625.375-2.375 1-1 1.625-1 .75.125 1.5.25.625.75 1.25.875 2.5-1 2.75-.25-.25 3 .375 1 .25-2.375 1.125-3.125 1.75-1.5 2.125-2 .75-1.25-.125-2.125-1.125 0-1.125-1.625.25-2-.25-2.875 0-.625-1-1.125-1-.75-1.5-1.375-1.375-1.125-2.25-1.375-.25.375-1.125-1-1.125-1.75-1.875-1.625-.375 1.125-1.125.25-.5-1-1-1.375-.75 0-1.375-.5-.625-.5-.75-1.5.125-1.375-.5-1.875-1.875-.875-1.875-.875.25-.25-1.375 0-1.75.25-2.25.625-.125.375-.625 1-.375.75-1.25 1-.125.75-1 .625-.75.25-1.25-.25-.125-1.125-1-1.125-1.25.125-.875-.625.875-.75-.125-.75-.875.25-2.125 0-1.75-.125-2.25-.125l-1.375 2.5s.125.5 0 1.125-.625 1.125-.625 1.125-.375.375-.375 1.125.25.875-.5 1.625-.75 1-1.25 1.25-.5.125-.875.625-.625.5-.875 1.125-.25.625.125 1.25a8.02 8.02 0 0 1 .625 1.375s.375.125.125 1.25-.375 1.875-.375 1.875 0 .5.125 1.5 1 2.125 1 2.125l.625.875s.375 1.5.5 2.25 1.25.5.125 1.5-2.75 1.625-3.875 3.5-.75 3.375-1.625 4.375-.125 1.125-1.25 1.125-2.125-1.25-2.75 0-1 2.375-1.875 2.5-1-1.375-1 .375-.375 2.875-.375 2.875-.25.875-1.125.75-1-.25-1.75-.375-.75.375-1.375-.375-.75-1.125-1-1.75-.25-.875-1.25-1-1 .25-1.5-.625-.75-1.125-1.5-1-.75.625-1.75-.375-1-1.75-1.5-1.625-1.125 1-1.125 1 .125.5-1.375.375-1.75-.375-2.875-.375-1.25.75-2.25.25-1.125-.625-1.125-1.25.125-1.5-.375-2 .125-1.125-.625-1.5-.375-.25-1.25-.25-.875.125-1.75-.375-1.25.25-.875-1.125.125-1.25.75-2.25.625-1 1-2.125.5-1.375 1.125-3 .875-1.125.875-2.375-.5-1.25.25-2.125.875-.875.75-1.875.25-.75-.25-1.5-1.75-1.875-2.25-2.375-.375.125-.625-1.375-.75-1.25-1-2.125-.25-.875-.25-2-.875-.75-.875-1.375-.375-1.125.5-1.625 1-.125 2.125-1.125 1.125-.75 1.375-1.625 1.125-1.375 1.125-1.375-.125.125.625.875.875.75 1 1.25-.375.625 1.125 1 1.125.5 2.625.5 1.875.125 2.5-.125 1.25-.625 1.25-.625.5-.375 1.375-.375 1-.125 1.75.125.125.375.875.25.875.125 1.5-.25 1 .25 1.375-.875 0-1.5 1-2.25 1.375-1 2.375-1-.625-1.625-1.25-1.75-1 .5-1-.125-.125-.75.25-1.75 1.125-1.625 1.125-1.625-.125-.5-.25-1.375 1.625-1.375.5-2.125-1.625-1.125-2.375-1.125-.625 1.25-1.25-.25-.125-1.75-.75-2.5-.875-.5-1.5-1.375.25-.75-1.125-1.75-2.25-1.25-2.875-1.25-.875.875-.75-.375.125-1.625 1-2.375 3.125-1.375 4-1.5-.5-.5 1.375-.125 1.25.375 2.125.5 2.5.625 2.5.625.25-1.875.75-2.5.625-.625 1-1.625.5-1.125 1.75-1.5 2.125.625 2.125.625-1.625 1.625-.375 1-.375-2.625 2.375-2.25 3.75 2 4.125.125 0-1.875.625-2.875.625-1 1.75-1.625.875-2.5 2.25-2.75.875 0 2.125-.25 1.125 0 1.875-.875 1.375-3.125 2-3.375 1 .375 1.375-1.625-.25-1.625.375-2.125 1.375.125 1.75-1.25.25-1.625.25-2.25-1.75-.625.625-1.125 2.5.25 3-.75.5-.75.75-1.75.75-.75 1.375-1.75.25-1 .625-1.875.375-4.125 1-4.375.625.5 1-.5 0-1.25.75-2.25.875-.875 1.625-1.375.875-.375 1.125-1-.875-.5.875-1.75 1.625-.75 1.875-1.375.5-1 .625-1.625 0-.625.125-1.5 0-.25.125-1.75.375-2.5.5-3.125.25-1-.375-.875-.75 1.125-.875 0-.375-1.5-.625-2.125-.625-1.75-.625-1.75-.5-.5 0-1.25 1.125-1.875 1.125-1.875.375-.375 1-.5.75.125 1.25-.5-.5-.75.75-.875 1.5-.125 1.5-.125l-.75 1.125-.125 1s1.375.75 1.625 2.25.5 1.625.375 2.375-.25 3.75-.25 3.75 0 1 .75 1.625 1.25.875 2 1 2.125.25 2.75 0 1.25-.375 1.875 0 1.375 0 1.875-.25 1.125-.5 1.75-.625 1.125-.125 2.375-.125 1.625.25 2.125-.25.375-.125 1-.625 1.875-1.125 2.5-1.125.625-.125 1.375-.25 1.75-.625 2.75-.25 1.375.5 2.25.625 1.25.375 1.75 0 1-.75 1-1.5.125-1.25-.375-1.75c0 0-.5-.5-.875-1.75s-1.375-1.75-.625-2.625 1.125-.75 1.375-1.875-.5-1.75.375-2.5 1-.875 1.25-2 .25-1.75 1.25-1.375.875-.75 1.5 1-.375 2.5 1.25 2.625 2.75.875 2.75-.125-.75-1.75-.5-2.875S569.5 246 569.5 246s-.625.625-1-.125-.625-.5-.75-1.75-.875-.5-.875-1.625-.5-2.125.25-2.625 1.375-.625 2.5-.375 3.25-.375 4.25-.5.625.125 1.875.25 2 .125 2.875-.125 2.5-1 2-1.375-.875-.625-1.5-.75-1.5-.5-1.875-1.25-1.25-1.625-1.875-1.375-.375.375-1.625.375-1.875-1.75-2.875-1.125-.25 1-1.5 1.25-2.625.375-3.875.375-1-.25-2.375 0-2.375 1-2.875-.25-.625-.875-.625-2.125.75-2.125 1-3.25-.5-2.25.375-3.375 1.5-1.375 1.875-2 .75-1.375.875-2.25.125-.625.125-1.5-.375-1.625-.875-2-.375-.375-1.5-.5-.75-.875-1.875.375-2.125 1.375-2.25 2.375.5 1.375-.125 2.625-.75 1.125-1 1.625.25 1.25-.25 1.75-.875.5-1.75 1-1.5.125-1.625 1.625-.375 1.125 0 2.125.625 1.125.875 1.875.75 1.125.75 2.625.375 2 .375 2 .5 1.75.375 2.625-.5 2.375-.875 3.25-.75 1.375-1.375 2-.375.75-1.125 1.5-1.625 1-2.25 1.375-.75 1.625-.75 1.625v2.375s.625 1.625-.5 2.125-1.375.625-2.125 1.75 0 2-.875 2.75-.625.875-2.125.75-1.75-.125-2.25-.75-1.125-1.75-1.875-1.875-.625.125-1.125-.125-.125-.75-.875-.75-1.125.5-1.125 0v-1.375-4.625l-1.875-2.875.625-1.625-.75-1.25-.875-.5s-1.375.5-1.5 1-.125.875-.375 1.375-1.375 2-2.25 2.125-2 .25-2 .25-.375 1-1.125.625-.5-.25-1.375-1.25-1.125-2.125-1.125-2.625.25-.625-.375-1.125-.625-.5-1.25-1.125-1.5-1.125-1.375-2.25.375-2.25.625-3.375-.375-2.25-.375-2.25l-.475-.909z"
        style={{
          opacity: 1,
          fill: "#2293ac",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          enableBackground: "accumulate",
        }}
      />
      <path
        id="path2410"
        d="M429.125 209.875s.625 3.875-.25 5.5-1 .75-1.5 3.125-.125 3.25-1 4.625-.625-.875-1 2.75-.125 4.5-1 4.875.25 1.75-1.25 1.75-2 1-2.375-.375.25-2-1.25-2.125-2.375 1.625-2.625-.125.375-2.375-.875-2.875 1.25 3.625-2.875-1.25-3.375-8.25-3.375-8.25-1.25-1.375-1.25-2.25.875-3.625-.25-5.125-2.25-4.5-.875-5.375 2.75-.625 3.125-2.625.25-1.75.5-2.75.75-1.375-.25-1.5 0 .375-1.875-.125-1.625-1.25-2.125-1.375.375.75-1.25.125-2.875-1.125-1.125-1.75 2.875-.875 3.625-.625 1.125 1.625.875-.25S404.5 191 404.5 189.75v-2.25c0-1.25-.25-1.875-1.25-2.875s-.75-1-1-2.625-.25-1.5-1.125-2.5-1 .375-1.625-1.375-.625-2.125-1.875-2.125-1.125.75-2.125-.625-.75-1.625-2.375-1.5-2.875.875-3.125 1.375.375 1-1.25 1.125-2 .125-2.875.125-1.75.375-1.75-.125c0 0-1-1.5-2.625-1.125s-2 1.5-2.5.25-1.5-1.125-1.625-1.75-1.625.125-.125-1.5.5-2 2.375-1.875 1.5.25 2.5-.25 2.375-.625 1-.75c0 0 .5-.75-.875-1s-2.875.5-2.875-.5-1.25-2.125.5-2.125 2.75.5 3.625-.375.875-.625 2.125-.5 2.5.75 2.875-.25 2.375-1.125.75-1.625-2.5-.375-2.125-1.125 1.375-.875 1-1.75-2.125-1.625.375-1.75 3.75 1 4.125-.375-1-2.5 1.25-2.5 4.625-1.125 4.75-1.875-.5-1.625 1.625-1.125 1.75 1.625 2.875.25-.125-1.75 2.125-1.25 2.5.75 3.375.125-.75-.875 1.375-.625 1.75 1 2.125-.875-1.375-1.625.75-2.125 2.25 0 3.25-1.375.125-1 2-1.375 2.125 0 1.25-1.375-2.5-2.125 0-2.375 3.875-.5 4.125-1.25c0 0-.125 1 1.375.625s1.25-.875 2.125-2 .625-1.375 1.5-.75-.125 1.125 2.125 0 .5-1.125 2.75-.75 2.125.125 4.75.25 1.25.5 2.75.875 1.125.25 3 .25 1.5-.375 2.625.375.625.875 2.875.875 2.875-.625 3.25.75-.625 1.5 2.125 1.875 3.625-.125 2.125 1-4.625 1.25-3.75 2 .75.5-1.625 1-5.875 1-3 1.375 4.875-.875 5.625.375-1 1.375 2.25 1 1.875-1.125 4.5-.625 2.125 1.25 3-.375-1.5-2.5 1.375-1.875 2.25.625 4-.375 2-3 2.75-.625.625 2.875-1 3.625-1.5-.375-2 1.375-.375 2.25-1.625 3.25-1.875.125-1.625 1.875.25 1.5-.125 3.25-1.25 2.25-.125 3.25 1.125 0 1.875 1.5 1.125 1.5.375 3.25-.875.875-1.125 3-.5 3.375.375 2.75 1-2.375 1.125-.625.625 2.875-.875 3.5-1.375-.25-1.625 1 .625 1.625-.5 2.625-.125 2-1.375.875-2-2.875-3-1.75-2.375.125-1.25 1.5 1.875 1 2.125 1.5.125 1 .5 1.75.125 1.125 1.125 1 1.375.375 1.125 1.25-.375 1.375.375 2.25 1 .875.375 1.25-.75.5-1.625 1-.75 1.25-1.25 1.375-1.5.75-1.625-.5-.25-2.875-1-3.5-1.875-2.25-2.125-.75 0 2-.375 2.75-1.875-.25-.375 1 2.125 1.625 2.125 1.625 1.375.75.75 1.375.125.875-1.75 1.125-1-1.625-2.75.375-3 2.5-3 2.5l-.875-1s-.75-2.125-1-.75 0 1.25-1 3.375-.5 2.625-1.625 2.75-2-.75-2.625.125.25.625-.875 1.5-1.5 1-2.25 1 .375-2.125-1.125.125-.625 2.5-1.875 2.75-1.5.25-2.625.25-1.75.125-2.875.125-2 .125-2.75.5-1.5 1.25-1.5 1.25v.75z"
        style={{
          fill: "#b5b81d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path11103"
        d="M570.563 189.875c-9.707-.57-14.541 9.639-23.492 10.42-5.856 10.832-12.4 21.751-22.445 28.577-2.916 3.315.327 12.384 2.83 15.15 8.22-10.735 11.7 6.11 14.415 10.41 4.12-3.416 3.856-9.808 9.035-13.01-2.065-7.24-3.47-14.655 2.48-20.394.813-12.03 18.509-7.001 14.047 3.42-5.029 5.45-2.108 8.522 4.157 5.427 9.4-2.447 19.233 13.431 5.235 13.512-8.97-2.383 5.026 10.552-4.293 12.662-5.672-1.451-6.54.71-4.626 5.607-1.256 10.192-14.484 3.171-20.699 8.591-7.29.215-13.24-1.571-16.359 6.423-5.56 7.149-7.886 15.998-14.16 22.861-4.222 6.017-11.176 9.006-14.451 15.276-7.637-2.562-9.062 9.21-15.8 4.63 7.622 5.136 11.36 18.328 2.17 23.747-5.198 3.317-13.77 1.87-18.414 2.032 7.352 6.478 2.426 14.915 2.29 22.196 3.435 5.635 9.905-.008 14.384 5.964 9.44-.319 16.343-11.02 11.506-19.914 2.018-7.95 6.304-20.911 17.111-16.055 7.952-6.321 16.272 8.26 19.193 7.042-3.498-8.449 8.678-13.646 13.326-6.135 7.647 2.498 6.34 15.941 12.541 15.743 8.105-2.338 7.264-11.832 12.981-17.137 2.102-8.421 3.565-19.402 13.712-21.255 7.344 5.231 11.824-5.036 19.884-3.916 9.656-3.074 6.988 10.11 2.964 11.788 1.927 5.052 8.536 3.576 10.055 10.006 7.565-.22 4.599 13.011 12.09 5.433 2.824-6.613-.91-18.479-7.23-20.382-4.135-8.25 11.465-15.326 1.623-22.069-3.286-7.752-1.816-17.782 5.252-22.962 6.37-1.718 13.583-5.438 19.034-5.708 5.527 4.888 4.853-5.714 10.904-4.511-2.918-5.784 2.434-11.904-4.77-14.76-1.122-8.691 1.26-18.117-1.421-27.513-3.064-9.368 6.445-16.974 4.328-26.238-4.729-9.35-11.27 5.018-18.38.762-10.935-1.987-18.28 9.71-27.92 12.563-8.757.617-12.242 14.627-21.73 8.63-.55-7.285-14.177-9.956-7.595-17.866 4.051-4.072 17.205 1.98 17.325-2.258-8.02-3.652-17.414-1.401-25.498-5.317-1.85-.537-3.707-1.06-5.59-1.472zM539.28 349.531c.08.65.256-.303 0 0zm21.625 12.531c.063 6.127 4.074.202 0 0z"
        style={{
          opacity: 1,
          fill: "#47c1dc",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter11175)",
          enableBackground: "accumulate",
        }}
      />
      <text
        xmlSpace="preserve"
        id="text2468"
        x={739.634}
        y={268.783}
        style={{
          fontSize: 40,
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fill: "#000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          fontFamily: "Sans",
          InkscapeFontSpecification: "Sans",
        }}
      />
      <path
        id="path20"
        d="M662.952 190.044c.707.442 1.414 7.16 1.414 7.16s.177 3.358-.354 4.065c-.53.707-.53 3.89-.53 3.89l-1.237 2.12-1.945 4.774s-1.237 3.889-1.06 4.773c.176.883 1.06 2.828 1.06 2.828s-1.06 1.59-.53 2.475c.53.884 1.237 3.182 1.237 4.42v4.772 4.066s1.768.354 1.768 1.237c0 .884 0 2.299-.707 3.536s-1.591 1.768-1.768 3.359a14.39 14.39 0 0 0 0 3.005l1.414.707 3.182 2.121s1.591 0 1.768 1.238c.177 1.237.884 1.768.177 3.182-.707 1.414-2.475 2.298-2.298 3.182.177.884.53 1.237.707 2.475.177 1.237.707 1.414.707 3.182 0 1.767 1.06 2.828 0 3.358-1.06.53-1.237.884-2.121 1.238-.884.353-4.066.353-4.243 1.59-.177 1.238-.354 1.592-1.06 3.006-.708 1.414-.885 1.768-1.768 1.945-.884.176-1.238 0-2.122-.177-.884-.177-2.475-.884-2.475-.884l-1.414-.177-1.237-1.237s-.707.53-1.414.884c-.708.353-2.299 1.767-2.299 1.767s-2.474.707-3.182.707c-.707 0-.707-.176-1.414 0-.707.177-1.944 0-2.475.708-.53.707.707 1.414-1.944 1.59-2.652.177-2.652.177-3.359.177-.707 0-1.944 3.713-1.944 3.713s1.414 1.237.353 1.59c-1.06.354-1.768 1.415-2.298 2.122-.53.707-.884 1.237-.707 2.121.177.884 0 1.415.353 2.475.354 1.06 1.238 3.182 1.238 3.182s.707.354.53 1.414c-.177 1.061-.707 1.591-.177 2.475.53.884 1.591 1.238 1.591 1.238l1.061 1.414s1.414-.354 1.414.884c0 1.237.177 1.768.354 3.182 0 0 1.021 1.399 1.728.868.708-.53 1.945-1.414 1.945-2.474 0-1.061-.177-1.415.707-1.591.884-.177 1.414-.177 2.298-.53.884-.354.53-.354 1.591-.354 1.06 0 .884-.53 1.414.53.53 1.06-.176.354.177 1.945.354 1.59.53 1.414.707 2.474.177 1.061 0 .708-.353 2.122-.354 1.414-.354 1.59-1.238 1.944-.884.354-2.651 1.238-2.828 2.652-.177 1.414 0-.354.177 1.944.176 2.299.176 3.006.884 3.36.707.353.883.176.883 1.237 0 1.06-.53 1.414.707 1.59 1.238.177 2.122-.176 2.122-.176s2.298.353 1.768 1.768c-.53 1.414-1.591.53-.884 2.12.707 1.592.884.354 1.06 2.122.177 1.768-.53 2.298.354 2.298s2.475.707 2.475.707l.177 2.299.353 1.414s-2.298-.884-1.944.707c.353 1.59.707 1.59.707 1.59s2.298-.176 2.298 1.415-.354 2.121-.177 3.005c.177.884.984.869.807 2.106-.177 1.238-.277 1.96-.453 3.02-.177 1.061.53 1.592-.884 1.945-1.415.354-2.475 1.415-2.475 1.415s1.59 1.59-1.768.883c-3.359-.707-2.828-1.237-4.243-1.59-1.414-.354-1.237.353-2.298-.354-1.06-.707-1.414-.354-1.767-1.414-.354-1.06-2.975-2.538-2.975-2.538s-.875 0-1 .875 1.75.875-.375 1.25c0 0-1.25.125-1.875.25s-1.25-.25-1.875.25-.625.875-1.5 1-.75 0-1.75.125-1.75 1-1.75 1 .25.5-1.375.375-2.25.25-2.25.25 0 1.5-1.375.5-2-1-2-1.5.625-1 1.125-1.5c0 0-.47-1.486-2.327-1.133-1.856.354-3.005.265-3.447.884-.442.619-.884 1.856-1.591 1.945-.707.088-2.74.265-3.27-.354-.53-.619-1.49-2.592-3.99-3.342s-4.625-1.375-5.5-.75-.125 1.375-1.875.875-3.5-1.25-4-1-2.125 0-2.125.625.75 1.625-.25 1.75-2.25.625-2.875.875-.25.5-2.5.5-4.5.375-5.375-.375-1.25-1.625-1.625-2.125-1.375-1-1.375-1h-1.25s-1.375.375-1.875 1-.5 1-1 1.375-.5.25-1.125 1-.125 1.125-.625 1.75-.875.125-1.125 1 0 .5.125 1.375.75.875 0 1.875c0 0 1.063 2.188 1.5 3.25.438 1.063 1.875 1.625.75 2s-2.5.438-2.25 1.438 2.625 3.375 3.313 4.562c.687 1.188.187 3.875 1.312 4.875s2.875 1.875 3.5 1.875 2.5-1.375 2.75-.125-.25 3.625.5 3.75 2.5 1 2.875.375-1.253-2.394-.016-2.924c1.238-.53 0-3.006 2.652-1.768 2.652 1.237 2.652 2.121 4.243 2.298 1.59.177 2.651-.354 3.712-.177 1.06.177 2.298 1.238 2.652 0 .353-1.237 1.237-1.944 2.121-1.944.884 0 2.828-.53 3.182.53.354 1.06-.53 2.298-.354 3.359.177 1.06 1.238 1.414.884 7.424-.353 6.01 1.061 9.016.177 9.546-.884.53-2.121 2.122-1.768 3.006.354.883 1.768 3.889 1.945 6.01.177 2.121.884 2.652 1.06 3.712.177 1.06-1.237 1.238.177 3.005 1.414 1.768 4.42 2.829 4.243 4.066-.177 1.238 1.944 1.768 2.828 3.006.884 1.237 2.298 4.772 2.652 6.363.354 1.591 1.591-.707 2.298 1.945.707 2.652 2.829 2.298 3.359 4.243.53 1.944 2.453 3.8 3.453 4.3s4.25 1.25 4 3 2.75 3.5 2.75 4.75-.25 3.75-.25 3.75-.5.5.5 1.5 1.75 1.75 2 3.25 1.25 1.25 1.25 1.25 9.75-1 13-2 7.25-2.75 7.25-3.75 0-.75 1.5-1.25 2.5-2.5 2.5-2.5l1.5-1.25s.25-2 1.5-1.75 2.75 1 2.75 0-.75.25 2.25-4.75 3.5-6.75 3.25-7.75-.25-1 .75-1.75 1.5-3.25 1.5-3.25l-.5-2.25 1-2.25s1.433-3.917.196-4.448c-1.237-.53-1.06-.884-1.06-2.298 0-1.414-1.592-2.298-1.592-2.298s0 .53-1.414 0-3.182-2.121-3.182-2.121-1.59.707-1.768-.354c-.176-1.06.354-2.651-.53-2.121-.884.53-1.944.353-2.475 1.06-.53.708.707 1.768-2.475 1.768s-3.889 1.061-4.596-.176c-.707-1.238-.707-1.238-1.06-2.652-.354-1.414.707-.707-.884-1.768-1.591-1.06-1.945-1.06-1.945-1.944 0-.884-.53-1.415-.53-1.415s-1.238.708-1.768-.707c-.53-1.414.707-2.298-.707-3.535-1.414-1.238-1.414-1.414-1.945-2.475-.53-1.06-1.06-1.768-1.06-1.768s-1.238-.707-.708-1.414.177-.884 1.768-1.06c1.591-.178 1.945-.531 2.652-1.061.707-.53.353-.884 1.59-1.061 1.238-.177 1.415-1.238 1.945.177.53 1.414.354 1.944.354 3.889 0 1.944-.177 3.359.354 4.42.53 1.06.883 1.59 1.06 2.297.177.707.354 1.238.354 1.238s.177.177 1.06.177c.884 0 1.061-.708 1.415.176.353.884 0 .53.53 1.238.53.707.354 1.06 1.237.707.884-.354 1.061-1.238 1.945-.884.884.354 1.591.53 1.591.53s1.237.177 1.237-.884c0-1.06-.176-1.59.354-2.298.53-.707.884-2.475 1.944-.176 1.061 2.298.53 2.651 1.061 3.535.53.884.884 1.591 1.945 1.238 1.06-.354 1.59-.354 2.298-1.061a6.104 6.104 0 0 1 1.414-1.06s-.177-1.769.884-2.122c1.06-.354 2.298-1.414 2.298-1.414l1.237-1.415 1.061-1.414h2.652c.707 0 1.414-.884 2.121-1.06.707-.177 3.005-.884 3.359.353.353 1.238.177 3.182.53 3.89.354.706 2.652 1.59 2.652 1.59h1.414c.707 0 1.06-.884 1.237.354.177 1.237-.176 1.768.177 2.475.354.707 2.652.707 2.652.707s2.298 0 1.237 1.06c-1.06 1.061-1.767 1.238-2.121 1.945-.354.707-1.06.884-.177 1.237.884.354.707-.53 1.414.707.708 1.238.53.884 1.061 1.591.53.708-.353.884 1.238 1.061 1.59.177 2.12 0 2.12 0l.708-1.768s.884-1.237 1.59.177c.708 1.414.01 1.384-.167 3.152-.177 1.768-.354 3.514-.354 4.751 0 1.238-.75 1.945-.573 3.182.177 1.238.427 2.018.427 3.432 0 1.414 1.375.863 1.375 2.1 0 1.238-.177 1.591.53 2.298.707.707 1.475 2.247 1.475 2.954 0 .707.686.987.686 2.225 0 1.237-.052 2.37.655 2.724.707.354 1.863.552 1.863 1.966 0 1.415 1.155 2.932 1.155 2.932s.56 1.28.56 1.988c0 .707 1.208 1.121 1.208 1.828 0 .707 1.414 0 2.298 4.773.884 4.773 1.414 1.768 2.828 5.834 1.415 4.066 2.122 5.126 3.005 5.126.884 0 1.945-.353 2.122-1.237.177-.884 0-.884.884-1.237.884-.354.707-.177.884-1.238.176-1.06-.708-1.237-.354-1.944.354-.708-.53-2.122.884-2.122 1.414 0 2.475-1.237 2.475-1.237s-.53-.707-.53-1.591-.708 1.768 0-2.122c.707-3.889 1.06-4.596.883-6.894-.176-2.298-1.06-1.237 0-4.242 1.061-3.006 1.591-1.591 1.591-3.89 0-2.298 1.061-4.773 1.238-6.187.177-1.414.707-.353.707-1.944s-.884-2.475.177-3.536c1.06-1.06 2.475-1.414 2.475-2.651v-2.652c0-.884.353-2.652.353-2.652s2.298-.177 1.768-1.237-.354-2.298 0-3.182c.353-.884 1.398-4.585 2.898-3.585 1.5 1 2 1 2 1s1.375-1.375 1.25-2 .5-1.75.5-1.75.25-1.75.75-1.875 2.875-.25 2.875-.25l.875 2.125s.875 2.75 2.125 3 1.25 2 1.5 3.75 6.75 8.5 7 10 3.5.5 3.5.5 1.25 3 2 2 5.25 1.75 5.25 1.75.25-.25.5 1.75 1.75 2.25 1.5 3.75-.75 3-.25 4.75.5 2.25 1.25 3.25.5 2.75.75 4-1 2.25 0 3 1 1 3.5 4.25 1.5 3.5 3 3.75 3.25 0 3.25 0 1 0 1-1.25-.5-2-.5-2 .25 3-1.5-1.75-1.75-5.5-1.75-7.5.5-1.5-.75-2.75-3-.75-1.75-2 1.75-1.25 2-2.25 0-1.25 1.25-1 1.5.5 1.5.5l2.25 1.75s0 1 1 1 2.25.75 2.25.75l-.25 2.25s.75.5 1.25 1.5 1.75 4.5 1.75 4.5 1.25 1.75 1.5.75 3.5-3.5 3.5-4.5 3.25-4.5 3.5-6.25 1.25-5 .75-7.75-.25-3.75-1.5-5.75-1.5-2-2.25-5.5-2.5-4.75-3.75-4.25-2 .75-2 .75.75-1.75.25-4 0-2.5-2.25-2.25-3.25-.25-3.5-1.25-.5-10.625 3.125-10.125 1.375 2 3.25 2.375 2.625 3.125 3.625 2.5 1.5-1.875 2.125-2.375 1.875-1.125 1.5-2-1.75.125-.5-1.125 2.75-1.625 3.125-2.375 1.25-1.5 1.75-1.375 1.375 1.125 1.625-.125.25-2.375.25-2.375 0-.625 1.375-1.875.875-.5 1.5-2.125.125-.875 1.125-1.875 1.625-1.25 1.5-2.375-.625-1 .5-1.25 2.75-.25 2.75-1.875-.375-2.625.25-3.625.75-.75 1-2.375.625-2 .625-4.125-.875-2-.125-3.625 1-4.875-.125-5-2.625.625-1.625-1.75 1.75-3.25.875-4.75-1.75-1.25-1.5-2.625.75-3-.625-3.375-3.875-.5-2.625-1.25 1.625-.5 1.25-1.25-.375-1-.875-1-1.25 1-1.5-.5.25-1.625-.75-1.875-1.125.5-1.125-.875.375-1.875-.125-2.125-.75-.125-.75-1-.875-.5-.875-1.125-.875-.625.125-1.125.875.5 2.25-1 .5-.25 1.875-2.25 3.625-2.25 1.125-2.5-2.125.5-3-.375-.125-1.125-1.625-1-1.5.375-1.875-.125.75-.875-1.125-.875-1.25.75-2.75-.125-1.625-.5-1.5-1.5.125-1.875 1.125-2.125.75 0 1.375-.5 1-.625 1-1.375 1.375-1.125 1.75-2.125.375-2.5 1.125-2.5.75-.125 1.375 1.625-.875 2.5.875 2.625 2.75.25 3.5.125.25.125 1.125 1.125.75 1.5 1.625 2.125 1 1.75 1 1.75 0 .625 1.125.375 2.875-.25 2.875-.25-.5-.625.125 1.5 1 1.625 1 3.5-.875 2.875 0 3.5a6.25 6.25 0 0 0 1.875.875s2.625-2.5 2.875-3.625 1-1.5.875-2.375-.375-.25.125-1.375.5-3.125.5-3.125-.5-.125-1-.375-.75-.125-1-1.5.25-1.375-.625-1.75-1.25-1-1.5-1.75-.125-1.25-.75-1.375-.5-.25-1.875-1.25-1.125-.5-2.125-1.125-1.25-1-1.25-1.875-.25-1.125.375-1.75 1 .75 1.125-1.5-.625-2.375.5-4.625.875-3.125 1.75-3.875 1-1 2-1.75.75.125 1.625-1.75.625-2.5 1.25-3.125 2-2.875 1.875-4.5-.625-1.5-.25-3 .5-1.5.75-3.5-.25-1.75.375-4.125.75-2.875.375-3.75-.625-1.875-.625-3.375.125-2.75 0-3.25-.25-1-.625-2.375-1.375-2.375-1.375-2.375-.25 1-.75-.625-.375-1.125-.625-2.125-1 .5-.625-2.875.25-4.5.25-4.5-.125-3.375-2.375-3.375-3 .625-3.25-1.25-1.25-2.25-2.75-2.5-1.75 0-2.5-.375-.375-.625-1.625-.625-.5.5-2.25 0-1.75.75-2-.5-.125-2.125 1.625-4.875 1.625-3.375 1.875-4.75-1.25-.75 1-2.75 1.625-2.625 4.25-2.625 3 0 4.875-.875.375-1.875 2.625-.875 2 2 3.25.875 1.625-1.875 2.25-1.875 3 1.375 3 1.375 1 .5 1.875.25 1.625 1.625 2.5-.125.5-2.25-.375-2.75-1.875 1.75-1.375-1.25 1-4.125.625-5.125-3-4.5.125-2.375 2.375 2.5 3.5 3.125.625.625 1 3 4.125 1.875 3.625 4.875-.5 3.875-.75 5.125-1.625.375-1.25 5.5.75 14.25 5.25 18.25 5.625 4.5 6.25 2.75 1.25-2.5.875-4.5-1.375-2.75-.625-4.125 1.375-2.25 1.5-3.375.375-2 .25-3.25 0-2.75-.25-3.75-.5-2.625-.625-3.625-1.125-2.75-1.5-3.625-1.5-2.625-1.75-3.875-.75-1.75.5-3.5-1.125-2.75 1.75-2.375 2.75.75 4.25.5 3 .625 3.5-1.125.125-1.5 1-2.75 1.25-1 2.25-2.5-.5-2 2-4 4-2.75 4.625-3.5 1.875-1.125.875-2.125-1.125-1.875-2.5-2.75-2.125-1.5-2.75-1.625-1.5-.375-.875-.875 1.625-1.375 2.625-1.375 1 1 2.5.25 2.125-1.25 3.125-.5.375.125 1.125 1.625-.75 1 1.25 2.125 3.875 1.375 4.5 1.375.25.75 1.75-.125 1.25-.5 2.25-1.875 1.625-1.625 1.25-3.375-1-2.875-1-3.375l-1.125-1.875s0-.875-1.75-.875-2.75.125-2.75-.5.5-1.75-.625-1.75-1.75-1-2.5-.125-1.25 1.875-2.125 1.375-1.875-1.75-1.875-1.75.25-1.25-.125-1.75-1.5-1.625-1.5-1.625l-1.625-.75s-3.375-3.375-4.625-3.5-2.375.125-2.75-.875 1.75-1-1.375-1.5-3.25 0-4.25-1.375.375-1.75-2.125-1.875-3.625.25-5.75-.625-2.125-1.75-3.125-.75-.5 1.125-1.875 2.25-.625 2.125-2.75 2.125-1.75.25-3-.25-1-.875-2.5-1-1.125 0-2.625.125-.25 1-2.625-.125-2.375-1.375-4.125-2.25-2.25-1.125-3.125-1.125-4.5-.375-5.5.5-2.125 2.875-2.625 1.75.75-1.25-1.125-2.25-2.625-.75-3.75-1.125-.875-.625-.375-2 2.125-1.5-.125-2-2.125-1.375-3.75-1.375-1.25 0-2.125.375-1 .375-1.375.875.375 1.125-.5.875-.375.125-1.25-.875-.625-1.375-1.75-1.25-.25-.125-1.875.25-2.125.375-3.25.5-3 1.625-3 1.625.125.25-1.25.375-.5-.625-2.375.75-1 1.5-2.5 1.375-.75-1-2.375-.25-1.75.375-1.75 1.375-1 1.625-1 1.625 0-.375-.375-1.625-.875-.75-.75-2-5.25-2-6-3.75-.625-1.5-.875-3.125-3.25-2.375-3.75-2.25-1.875 1.625-2.5 2.375-.875 1.375-1.875 2.125-1.125 1.25-2.125 1.625-.875 1-1.75.375-2.375-1.625-3.25-2.375-2.5-1-3.125-1-3.5.625-4.625 1.25-2.375.5-2.375.5-.625-.625-1.625-.375-2.875-.5-4.25 1-3 2.875-3.625 3.25-3 1.625-3.625 2-1.875 1.25-1.875 1.25-.75.125-.5-.75 0-2 .875-2.375 1.375.125 2.25-.875.875-1.25 2-2 1.875 0 1.875-1-.5-.625 0-1.75 1.25-2 2.125-2.75 2.125-2.25 2.125-3-2.75-1.625-3.25-4-3.625 2.125-4.75 1.375-3-2.125-3.125-2.875.25-2.5-.875-2.625-1.875-.875-2.625.25-.25.875-1.875 2.125-3 2.375-3.25 1.875-.5-1.875-.5-2.5-2.5.625-3 .875-2.125 1.375-2.625 1.625-1.875.25-3.375.375-1.5-.75-4.875 1.25-5.5 3.5-5.875 4-2 1-2 1-2.125-1.125-2.25.5-1 3.75-1 3.75h-3.25c-.625 0-2 1.375-2 1.375l-2 2.5s-.875.5-.125 1.5S689 168.5 689 168.5l3 .625s2-.875 2 .125-1 2.375-1.5 2.375-2.75-.25-2.75-.25-1.125-2-1.875-1.75-2 .5-2 .5l-1.5-1.25-.75-.375s-.25-3.375-1.125-.875-.5 3.25-.5 3.25.75 1.375 1.25 1.875 1.25.875 1.5 1.375.375 1.875.375 2.5-.5 1.375-.5 1.875 2 1.5 2 1.5.375.75-1.125.625-.5 1.875-2.5-.375-2.125-2.5-2.125-2.5l-2.25-.75-1.125-.375-1.75-.625-1 1s-.5.5 0 1.25.875-.25 1 1.25 0 2.125-.125 2.625-.625.625-.125 1.625 1.5 1.375 1.5 1.375.5 1.375.5 2.125-.75 1.75 1.125 2.125 1.5.5 2.625.375.625-.375 2.25-.375 1.375-.625 2 .125 1.125.5 1 2 .75 1.375-.375 2.125-1.625 1.75-2.25 0 0-3.25-1-2.875-.75.125-1.5.75-1.75 1.625-1.75 1.625-1.875.375-2.375-.625-1.25-1.625-1.25-1.625-.375 2-1.25.125-.625-1.125-1-2.375-.875-1.875-.875-1.875-.75 1.125-.75-.25 1-1.75 0-2.25-.5.125-1.125-.75-.875-2.375-.875-2.375-2.5-.75-1.5-1.875.875-.75 1.5-1.875 1.25-1.75 1.375-2.5.125-1.875-1-2.125-1.125 1.25-1.875-.25-.5-1.625-1-1.625-1.125.125-1.75 0-1.25-1.125-1.25-1.125l-2.875-1-.875 2.5s0 .125.125 1.125.375 1.75-.125 2-.75.625-.5 1.5 2.375 3 1.75 3-2.125 1.5-2.125 1.5l-.25 3.375 2.5.625.375 2.5 1 .875-.673 2.294z"
        style={{
          opacity: 1,
          fill: "#48c74c",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          enableBackground: "accumulate",
        }}
      />
      <path
        id="path2419"
        d="M595.375 395.125c-.625 0-6.375-1.25-6.875-1.5s-1.875-1-3.125-1-3.375-.75-4.125-1-2.25-.75-3.625-.25-1.375-3.375-7.375-3-7.5.5-8.375.875-3.125 1.625-4.5 1.625-1.5-.375-3.625-1.125-2.5-1-3.5-2-.75-1.75-2.375-2-2.375.625-3.25-.375-1-1.375-1.375-2.125-.625-2.125-1.875-2.25-1.125 1.125-1.5-.75-.75-3.375-1.25-3.75-1.375-.75-2.5-1.875-1.25-2.25-1.25-2.25L532.75 371s-5.5.25-6.125.25-1.75.125-2.5.625-.375.75-1.75 1.375-3.625 1.75-4.25 2-3.5.375-3.5.375 0 1-1.125 1.75-2.625 1.625-3.875 1.5-1.394-.569-2.375-.375c-1.848.365-3.059 1.582-3.75 1.5-.633-.075-1.75.375-2.875.75s.125.5-2.25.5-3.625 0-4.375-.125-1.375.25-2 .375-1.5.25-1.268.42c-1.414 0-2.121 1.06-2.121 1.06l.353 4.597-3.182 3.535s-.707 2.829-1.414 4.95-1.768 4.242-1.768 4.242l-1.414 3.89s-1.561.806-1.436 1.431.375 1.875-.125 2.25-1.125 0-1.75 1.25-1.125 2.375-1.125 2.875.625 1-.25 2-1.75 1.125-2 3.25-1.25 4-.25 5.25 1.625 2.25 1.625 3.625-.375 1.25-.25 3.25.375 1.875.375 3.25-.125 3.25-.375 4.875-.75 2.125-1.125 4-2.625 2.625-.875 4.25 1.5 3.125 2 4.5 5 1 5 3.875 3.375 3.25 3.625 4.75-.625 3.625 2.375 4.875 2.75 3.125 3.375 3.625 3.375.875 4 1.625 1.5 2 2.125 2.625 1.25 1.625 3.375 1.5 2.375 0 5.75-.375 5.75-.5 6.625-.625 2.75.5 4.125-.125 1.125-1.75 2.875-2.125 2.375 0 3.5-.25 5.5-.25 6.125.25 1.375 0 2.125 1.625-1.5 4.125 3.25 3.875 7.5-1 8.125.125-1.5 2.75-1.125 4.25.875 1.875.375 2.625-1.625 1.125-1.25 2.25 1.375 1.625.875 2.125-1.125 2-1.75 2.875-3.25 2.125-2.25 3.25 7.625 6.375 9 9.5S553 510.25 551.25 513s-4 4.125-3.5 5.5 2.375 3.75 2.5 4.5.375 1.5.25 2.5 1 .625.25 1.75-1.25 1.625-1.5 2.125-1 1.5-1 2.625-.625 1.75-1 2.5-.5.75-.625 1.625 0 .5-.125 2-.5 1.75-.75 2.75-.125 2.25-.125 2.25 1.25 2.75 1.375 3.375.375 1.625.25 2.625-.625 1 .5 2.375 1.75 1.875 1.875 2.625.5 1 .5 1 3.25 3.125 3.25 3.75.75 1.125.625 2-.25.75-.25 1.875.125 1.625.25 2.5 1.625 3.5 1.875 4.125 1 1 1 2v2.375c0 1.25-.625 1.125-.125 2.625s1.125 2 1.375 2.5 1.5-.125 1.5 1-.25 1.625 0 3 1.25 2.25 1.625 3 .375.875.375 2.25.125 1.375.125 2.625v2.75c0 1 .75 3 .75 3.625s-1.125 1-.25 2.125 1 1.25 1.875 1.375 2-.25 2.5.625 1 1.125 1 1.125.5-1 1.125-1.375 1.375-.875 2.375-.875 1.625 0 2.5-.375-.75-.875 4.125-.875 4.75-.375 6.5-1.625-.375-1.75 3.125-2.5 4-.625 4.75-1.25.875-1 1.625-1 2 1 1.625-.25-2-.5-.5-2.375S598 586.25 598 586.25s-1 .125-1.25-.875 2.125-3.75 2.875-4.25 2.125.375 2.375-1.25.25-2.25-.125-2.75-1.625-.375-.25-1.625 2.125-3.75 2.125-4.5-.375-2.75.75-3.25 1.5-.375 1.875-1.375 2.75-4.375 3.125-5.25-1.125-1.75-.375-6.375 2.125-5.875 2.625-6 1.125-1.375 2.25-1.75.625.875 1.75-.875.5-1.125 1.25-2.25.5-1.125 1.625-2.25 1.25-1.875 1.75-2.375 1.25-.5 1.5-1.125 1-2.875.875-3.875-.375-1.625-.25-2.375.625-1.25.5-2.25 0-1.125-.25-2.125-.375-1.75-.375-1.75-1.375-3.625-.875-4.625-2.375-.125-2.375-.125.875-4.5-.5-5.25-1.375-1.125-1.375-1.125.25-2 .25-2.875-.875-3.375-.5-3.875.75-2.125.75-2.875-.25-1.75 1.125-2.75 2-.5 3-1.75 1.5-1.625 2-1.875 1.5-1.25 1.75-1.75 2.625-5.125 6.5-8.875 10.125-8.75 12.375-13.75 7.5-15.375 6-18-4.75-.25-7.25.375-6 .25-6.5.625-.375.625-1.5 1.25-4.125.875-4.125.875-3.375.125-4-.875-1.375-1.125-.75-3.25 1.25-1.875.625-2.875-.75-.5-1.75-2-3.375-2-3.375-3.5-.125-1.875-.75-1.875-.875.25-1.375-.75-.625-1.625-1.125-3 .375-.625-.625-2.25-2-1.125-2-3.125.75-1.875-.25-2.75-1.125-.125-1.625-1.625-.875-3.75-.875-4.375-.25-.125-.5-.875-2.25-2.25-2.25-2.25-.875.125-1.25-1-.25 0-.5-2.25-1.125-2.75-2-4.25 3 1.5-1.375-4.5-6.875-9.375-6.75-9.875c0 0-1.125-3.25 0-2.5s1.875 2.125 2.625 2.625 1.375.75 1.875.625.625-2 .625-2.75 1-3.375 1-3.375l-2.25-4.375-2 1.25s-.25.875-.75.875-1.5-.5-1.5-.5l-1.25-.375-1.625 1.5z"
        style={{
          fill: "#785c05",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path2394"
        d="M659.75 534c.25 1 1 .75 1 3s.5 5.5-1 3.5-1.5-2.75-1.5-1.5.25 3.5.25 3.5 1.23 1.7-.36 1.7c-1.591 0-1.768-.176-1.768.531 0 .707.177 2.121.177 2.121l-1.061 1.061-.53 2.298s1.767.177.707 1.945c-1.06 1.767-1.414 2.298-1.414 2.298s.176-1.591-.177 1.944c-.354 3.536-.354 4.066-.354 4.066s1.06-.353-.353 1.414c-1.415 1.768-1.945 2.298-2.298 3.182-.354.884.353 1.768-.708 2.652-1.06.884-1.59 1.591-1.59 1.591l-1.061 1.06s-.354 1.415-.354 2.122c0 .707-.53 1.237-.53 1.237s-.53.53-.53 1.238c0 .707.176 1.06-.708 1.768-.883.707-.53.884-1.59 1.767-1.061.884-1.415-.353-1.415 1.591 0 1.945-.53 2.829-1.414 2.829-.884 0-9.37.177-10.783 0-1.415-.177.884-7.248-1.061-8.485-1.945-1.238-3.182-5.48-1.945-6.364 1.238-.884.53 0 1.415-.884.884-.884.884-.884 1.414-1.945.53-1.06 1.414-1.06 1.414-1.06s-1.06-2.299-.353-2.299c.707 0 .353-2.651.353-2.651s.354-1.238.884-2.122c.53-.883-.53-1.767.884-1.944 1.414-.177 2.121.177 2.121-.707 0-.884-.884-1.06-1.59-1.238-.708-.176-1.061 0-1.061-1.237 0-1.238-.53-.707-.884-1.945-.354-1.237-1.415-.53-.177-2.121 1.237-1.591 1.237-.53 1.59-2.121.354-1.591-1.06-2.652.708-2.652s2.298.53 4.066-.177c1.768-.707-.177-.884 2.652-.707 2.828.177 3.005 1.06 4.065 0 1.061-1.06 1.591-.707 1.768-1.944.177-1.238 0-1.591 1.238-2.122 1.237-.53 1.237 0 2.12-.707.885-.707 1.592-1.59 1.415-2.651-.177-1.061-1.06-1.591.53-1.591 1.591 0 1.415.53 2.122-.354.707-.884.53-.884.884-2.475.353-1.59 0-1.944.884-2.475.883-.53 2.474-2.298 2.474-2.298s.53-1.59 1.238.884c.707 2.475 0 2.121.884 2.828.884.708 1.06.177 1.06 1.061 0 .884-.353 2.652-.353 2.652l-1.395.936z"
        style={{
          fill: "#785c05",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path2398"
        d="M450.5 439.75c-.25 1.25.5 2.75-1 4.25s-1.5 4-3.25 4-4 1-4 1v1.75s1 2.25-.5 3.25-2.5 1.5-2.75 2.5.125 3 .125 3l-.25 1.75s1 2 .25 3-.75 1.125-.75 2.75.75 4.25 0 5-.25 2-1.125 2.375-2 .625-2.375 1.375.25 1.625-.375 2.5-.5 1.625-1.125 1.875-.875-.125-1.125 1 .375 2-.625 2.5-2.25 1.625-2.625 2.125-3.25 1.5-3.75 1.625-11.5 1-13 4.125-1.5 5.875-2.125 6.5-.875-.25-.75 1.125.25 1.875.25 3.25.5.5.375 1.75 0 2.75-1.375 3.25-2.875.625-3 1.875 0 1.625-.25 2.375-.5.875-1 1.375-.875 1.125-1.125 1.875.125.75-.5 1.625-.625.75-.875 1.5.5.875-.875 1.25-4.625 1.875-4 2.75 1.5 1.125 0 1.5-1.25.25-2.75.5-1.25.125-2.875.5-1.875.875-2.875 1-1.5-.125-2.125-.125-1.125 0-1.125.625-.125.75.5 1.25 2.375 1 2.5 1.5.125.875.125 1.75.125 1 .625 1.125.625.25.75.75-1.25 2.25-2 2.75-1.375 1.125-3.125 1.25-1.375-.125-2.5.5-1.125.75-2.375.75-1.625 0-2.875.25-2.125.5-2.125.5.5.75.625 1.5.75.875.25 2-1.375 1.625-1.75 2.125-.375.25-.375 1.25l-2.625.375s-.875-.75-1.125.375 1 2.125 1 2.125-1.75 2.625-1.5 3.25.875 1.625.625 2.125-.125.75-.75 1.25-.125 1-.5 1.5-.75 1.25-1.625 1.625-1.125 1-1.125 1L365.25 560s-.5.625.125 1.375 1.25.25.875 1.625-.25 1.75-.25 1.75 1.25-1.375 1.125 2.375-.75 4.625-.75 4.625-.625-.125-.375 1 .75 2.125.125 2.75-.5-.375-1.5 1.625 0 4.75.625 5.375 1.125.75 1 2-.75 1.375-.25 2.25 2.125 1.5 2.375 2.375-.25 1.5.25 2.125a8.226 8.226 0 0 0 1.125 1.125s-.25 1-.25 2.125-.5 1-.5 2 0 2.25.5 1 .375-1.25.875-1.75 2.125-.5 2.625-.5 1-.75 1.875-.375 1 0 1.5 1.25.25 1.5 1.25 1.75 1.875.125 2.875.125 1.25-.75 1.5.375 1.75 1.5.25 2-1.75 0-3.25.5-1.5.5-2 .625-.5.5-1.375.875-.375.75-2 .375-1 .125-2.125-.625-1.625-1.125-1.625-1.625-.75-1-.75-1l-2.875-2.5h-3.375c-.75 0-1.25-.625-1.25-.625l-1.75.063s-.438-.438-.188-1c.25-.563.25-.563-.062-.625-.313-.063-1.188-.125-1.75-.313-.563-.188 0-1-.125-1.25s-1.313-.25-1.938-.313c-.625-.062-1.5-.375-2-1s-.375-.812-1.437-1.687c-1.063-.875-.75-1-1.688-1.313-.937-.312-1.25-.25-1.437-1-.188-.75-.938-.875-1.25-1.625-.313-.75 0-1.25-.875-1.812-.875-.563-1.063-.125-1.188-1.313-.125-1.187.188-1.75-.125-2.375-.312-.625-.125-.125-.625-.875s-.75-.875-.937-1.75c-.188-.875-.188-1.312-.5-1.875-.313-.562-.875-.812-.938-1.437-.062-.625-.062-.875-.062-1.438 0-.562.188-1-.125-2.25s-.125-1.562-.75-2.312c-.625-.75-.688-.25-1.188-1.875s-1.062-1.875-.75-2.688c.313-.812.5-.937.563-1.562.063-.625.438-.5.5-1.375.063-.875.063-.625.063-1.813 0-1.187-.75.313.125-2.937s.875-3.125.937-3.875c.063-.75 1.25-.875.813-2.188-.438-1.312-.688-1.312-.563-2.187.125-.875.625-1.25.5-1.688-.125-.437.063-.25-.125-.75s.5-.25-.313-.875c-.812-.625-1.062-.5-1.187-1.437-.125-.938-.125-1.688-.063-5.375.063-3.688-.187-3.938.438-5 .625-1.063.938-1.188.938-2.063 0-.875.5-2 .125-3.062-.375-1.063-.688-1.188-.313-1.813.375-.625.688-.625.688-1.375s0 .313.062-1.312c.063-1.625-.438-.438.188-2.563.625-2.125.875-4.25.937-5.312.063-1.063.125-1.375-.188-2-.312-.625-.75-3.625-.75-4.625s.188-.75.438-1.75.313-1.188.25-1.5c-.063-.313 0-.625.188-1.438.187-.812-.188-2.5.5-4.25.687-1.75.875-1.062.687-2.312-.188-1.25-1.625-3.25-1.188-4.625.438-1.375.875-1.125.813-2.938-.063-1.812-.25-4.25.188-5.25.437-1 .687-4.437.5-5.25-.188-.812.562-5.187-1.688-5.937s-2.25-.5-2.875-1.125-1.875-3.375-2.625-3.625-1.875-.5-2.75-1.125-2.125-1.75-2.125-1.75-.875-.125-1.75-.625-2.25-1.5-2.75-2.25-.75 0-1.25-1-2-3.25-1.875-4.25 1.125-2.875-.25-3.375-2.75-2.625-3.375-3.125S319.75 449 319.25 448s-1.375-.25-1.875-2.25-.25-3.625-.25-3.625-2-2.25-2.5-2.75-1.375-3.125-1.375-3.125-.25-4 .125-5.25 1.375-.125.625-2.25-1.75-1.625-1.125-3.625 1.25-2.75 2-4.625.625-4.375 2.5-5.625 1.5-3.75 1.5-4.5v-3.125c0-1-.125-1.75 1-3s1.75-2.375 1.75-2.375l1.25-1.125v-2l.75-2.25s.5-1.125.625-1.625-.25-2.5-.25-2.5l.25-1.625 3.125-.875s.375.375 1.375 0 2-1.25 2-1.25l2.25-1.25s1.5-1 2-1.5 2.25-1.125 2.25-1.125.875-.25 1.5-.25 2.75-.625 2.75-.625.125-.625.875-1.125 1.25-1.125 1.875-1.25 4-.625 4-.625 1.25.875 1.375 2.125-.375 2 .625 1.875 2-.375 2.5-.625.25-1.375 1.5-.5 1.375 1.125 1.875 1.125S358 384.5 358 384.5l5.5 1.875 1.875-.375c.625-.125 3.75-.375 3.75-.375s1.375.375 1.875.875 3.625 2.375 4.625 3.875 2.5 2 2.75 2.625 1.25 1.25 1.75 1.25.5 1 1.125 1.125 2 .125 2 .125.125.5.625 1.125 1.625-.625 1.875.75-.125 2.125.625 2.125 1.5-.5 1.5-.5l1.25-.5s0-1 1 0 1.75.75 2.625 1-.375.875 1.75 1.375 4.125.75 4.625.75.5-2 2.25-.375 3 2.375 3 2.375.25-.25 1 2.375.875 3.375 1.375 4.25 3.125 2.25 1.25 4.5-4.25 1.875-3 2.375 2.75 2 3.625 2 2.75-.375 3.375-.375 2.375.375 3.125.5 1.625-.125 2.375 0 1.625.5 2.375.875 1.625.125 2.375.5.75.5 1.25 1.375 1.5 1.25 2.625 1.25 1.5-.25 2.25.25 1.75 0 2.375 0 1.125-.625 2 .375 1 .875 2.875 1.125 5.25 2.625 6.125 2.875 1.375 1.875 2.25 2.125 2.25 0 3.25 1 2 1.75 2.25 3.5 0 2.25.375 3.375.875 2.375.625 1.875z"
        style={{
          fill: "#9c240f",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path2408"
        d="M778.125 511.375C779 512.75 778.5 513 780.5 513s3.25-.375 4.375-.125.625.625 1.875.5 2.375-.875 3.375-1 2.25-.25 3 0 1.875 1.125 3.25 1.25 4.5.125 5 .25 2.125 1.375 2.875.5 1-.625 1.25-2 .25-2.125-.625-2.375-.25-.75-2.375-.875-2.75-.375-3.375-.625-1.625-1.25-2.375-1.5-2.875-1.125-4.25-1.125-4.125-.25-5.5-.25-1.625-.625-3.125.5-2.75 1.625-3.625 2.25-.625.125-1 1.375-.75 1.875-1.125 1.625z"
        style={{
          fill: "#950d98",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path2411"
        d="M801.5 503.25c.5-1.75.125-1.5.25-3s.5-1.125 1.125-2.125.25-2.625 1.375-.75.75 2.625 2.125 3.75 1.625 2.375 2.75 1.25 3.25-2.25 2-3.625-2 0-2.125-3.25-.25-4.375-1.125-4.25-1.625 1.375-1.75-.375-.625-3.875.75-4 2.75.75 3.625-.875 1.875-2.125.25-2.375-2.875-.5-3.75-.375-1.5.125-1.375-.625-.875-1.5.875-1.5 1.375.375 3 .25 3.25-1 3.75-1.5 1.125-2.75 1.875-3.25 1.25-.875 1.125-1.5-.375-1.125-1.125-1.375-2-.5-2.375 0-1.25 1.875-2.125 2.25-5.125.125-6.125.625-1.875 1.125-2.5 1.5-2 1-1.75 2.5.25 2.75.25 3.375-1.25 2.375-1.5 3 .125 2.5-.25 3.375-.625.375-.625 1.625-.25 1.5.125 2.375 1 .875.625 2.125-1 .5-.5 1.875 1.125.875 1.25 2.125-.25 1.75 0 2.75 2 .125 1.875 0z"
        style={{
          fill: "#8a168c",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path2417"
        d="m767.388 479.854.707-1.768s.177 1.945.353 3.005c.177 1.061-.353 2.475.177 3.182.53.708.177 1.061 0 2.122-.177 1.06.707 2.828.707 2.828l1.293 1.527L772 491s.625.875.875 1.5 1.125 1 1.125 1v2.25c0 .875-1 1.375.125 1.625s2.5.25 3.25.25.5.375 1 1.375 1 1.125 1.125 2.5.125 2.375-.375 3-.125 1.125-.75 1.875-1.625.875-2.375 1-1 .125-1.25 1 1.625 1.75-.75 1.625-2.25.5-2.75-.75.875-1.75-.875-2.375-.25 1.875-2.875-1.625-3.5-1.125-3.875-4.25-1.5-3.875-3-6.25-2.125-4-3.375-4.375-1.75 1.125-2.375-.5-.625-.75-.625-2.625-.125-1.75-1-3.5-1-1.625-1.5-3.5-.25-1-2.5-3.875-2.5-3.125-4.5-4.625-2.5-1.75-2.375-3.75-1.25-4 0-4.375 1.5-.75 2.75 0 1.375 1.625 2.375 1.875 1.625.125 2.375.125.5-1 1.75.5 1.5 1.5 2.125 2.875.625 1.875 1.25 2.625 1.125.75 1.75.375 1.25-1.5 1.625-.75.375 1.125.625 1.625 1-1.125 1 1-.75 3.125.375 2.375l2.25-1.5s-.125-.375.375.875.625 2.375 1.75 2.875 1.5.5 1.5.5l1.138.854z"
        style={{
          fill: "#7b147d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path2420"
        d="M791 496.875s-.25-1.25 1.875-3.375 2.75-2.25 2.75-4.375-.125-2-1.125-3-2.375-1.625-1.125-3.125 1.125-1.875 2.75-2.25 3.25-2.75 3.375-3.625.25-1.375-.125-2.5-1.375-3.125-1.5-4.5-.25-2.375-.125-3.375 1-1 2.125-2.375 1.375-.75 1.375-2.75-.125-4.5-.75-5-.875-.25-2.25-.75-2-1.75-3.875-2.875-3.125-1.25-3.5-.625.375-1.5-.375 1.625-.625 3.875-1.5 4.5-2.25 1-2.625 2.25 1 2.125-1 4.25-5.625 6.125-8.25 6.625-4.5 1.125-4.5 2 1.125 2 .875 3-2 2-1.75 2.5.875 0 1.375 1.125.5 4.625.5 4.625L776 487.5s-1.75 2.625-.875 3.375 1.25.875 2.25 2 2.25 2.375 3.75 2.5 2.375.875 3.5 1.375 1.5 0 2.875-.125 3.875.375 3.5.25z"
        style={{
          fill: "#7b147d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path2424"
        d="M829.436 335.25c0-1.237.53-4.419-.177-4.596-.707-.176-.707-.707-1.944-.53-1.238.177-2.652-.53-2.652-.53s-.353-1.238 1.768-2.475c2.121-1.238 3.359-1.945 3.359-1.945l-1.06-.707s-2.299-.177-1.238-.884c1.06-.707 1.237-1.59 2.121-2.651.884-1.06 3.005-6.541 4.243-8.662 1.237-2.122 4.066-1.415 4.066-1.415l1.944-4.95s-1.59-3.712 1.06-4.949c2.652-1.237 2.83.177 3.536-2.828.707-3.006 2.829-2.475 3.182-3.536.354-1.06.707-1.06.177-2.828-.53-1.768-1.945-3.36-1.945-3.36s-.707-2.65-.707-4.065c0-1.414-.353-3.712.884-4.243 1.238-.53-1.06-3.358-1.06-3.358s.707-1.061-.177-1.768c-.884-.707-1.414-1.591-1.414-2.475 0-.884.176-3.182.176-3.182s.884-1.414 1.591-1.591c.707-.177 1.415.177 1.415-1.591s-.884-4.42-.884-4.42-3.713-5.48-4.42-5.833c-.707-.354-.707-.707-.176-1.768.53-1.06 4.065 4.243 6.54 4.596 2.475.354 4.773 0 4.773 0l2.298-1.06 4.597.176s1.944.177 2.298 2.122c.353 1.944 2.828 1.237 1.59 3.005-1.237 1.768-1.06 2.652-2.297 2.475-1.238-.177-1.061-1.06-1.945-.884-.884.177-1.591 0-1.591 1.945 0 1.944 1.414 2.12.177 3.712-1.238 1.59-.707 2.298-2.475 2.298-1.768 0-3.359-.177-5.127.177-1.767.353-2.651-.884-2.651.707 0 1.59 0 1.944.884 2.121.883.177 1.59 0 1.237 1.06-.354 1.061-1.414 1.769-.707 2.122.707.354 1.59-.53 1.59.354l3.006.176.53 1.768s.354 0 1.415.177c1.06.177 1.767-.707 2.121.53.354 1.238.884 1.768.884 1.768s.53 0 .707 1.238c.177 1.237.354 1.59.354 2.474 0 .884-.884 3.713-.884 3.713s-.707.707-.53 2.121c.176 1.414.883 0 1.06 1.768.177 1.768.177 2.298.177 3.535 0 1.238-.177 1.061.884 1.945 1.06.884 1.414 1.768 1.414 1.768s.884.53.884 1.767v2.298s-.53.177-1.238.177c-.707 0-1.59-.177-1.59-.177s-.177.53-.531 1.768c-.354 1.238-1.945 1.945-1.945 1.945s0 1.768-.707 1.944c-.707.177-1.237.177-1.944.354-.707.177-1.238 0-1.591.884-.354.884 0 1.06-.884 1.237-.884.177-1.768-1.414-1.945.884-.176 2.298 1.238 3.182-.53 3.712-1.768.53-2.828.884-2.828.884s.353 1.415-.884 1.061c-1.238-.354-2.652-1.591-2.652-2.475 0-.884-.177-1.414-.177-1.414l-2.475 1.59s.354.885-1.414.885c-1.768 0-2.475-1.945-2.121 0 .353 1.944 1.06 3.358 1.237 4.066.177.707 1.238.176 1.061 1.237-.177 1.06.177 1.06-.53 1.768-.707.707-2.122.884-2.829.884-.707 0-.884-.177-2.298 0-1.414.176-2.127 6.829-2.127 6.829l-1.25 1.125h-.689z"
        style={{
          fill: "#48c74c",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path2426"
        d="M832.75 455.5s.5-2.75 1.5-3.5.25-1 .25-2.25-1-2.5.25-2.75 1.5 0 3.25-.25 3.5-1.25 3.5-1.25l1.5 1.5s.75.75 3 .75 3 1 4 2.75.5 2.5 3.25 4.25 5.5 2.5 7 3 2.75 1.25 2.5 2.75 1.5 2.25-.5 2.75c0 0 5.724 2.462 6.43 4.053.708 1.59 1.945 2.298.531 3.182-1.414.884-3.005.177-2.828 1.237.176 1.06 1.237 1.768 1.59 3.005.354 1.238 1.592 1.945 1.592 3.36 0 1.413-.354 2.297 1.06 3.181 1.414.884 1.591.884 1.591 1.945v2.475s-1.06 1.06-2.828 1.06c-1.768 0-2.652-1.414-3.359-1.414-.707 0-2.475-.353-2.475-.353s-1.237-4.95-4.773-5.834c-3.535-.884-3.535-1.414-3.535-.707s1.237 2.298-.177 2.828c-1.414.53-2.121.53-3.005.53-.884 0 3.005 1.592-1.415 1.415-4.419-.177-4.773-1.768-6.717-.53-1.945 1.237-7.778-3.713-7.778-3.713s-2.652.177-2.652-1.237c0-1.415-.707-1.591.177-2.829.884-1.237.884-1.414.884-2.828s.353-1.768.353-3.182.884-1.945-.353-2.475c-1.238-.53-2.298-.884-2.475-2.121-.177-1.238-.177-1.415-1.06-1.415-.885 0 0 .177-1.415.177-1.414 0-2.475 1.06-3.712-.53-1.238-1.591-1.414-1.591-3.713-1.591-2.298 0-7.247 3.359-3.358 0s4.596-3.536 4.596-3.536-4.066 0-4.243-1.414c-.177-1.414-.53-3.712-1.414-4.066-.884-.353-1.945-.884-1.591-2.121.354-1.237 1.06-5.657 4.596-5.48 3.536.177 4.243 1.59 5.303 2.121 1.061.53 3.006-1.414 3.36.354.353 1.768 0 4.773 0 4.773s1.237.884 1.59 2.651l1.723 1.279z"
        style={{
          fill: "#7b147d",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path2412"
        d="M474 212.5s2 1.875 2.5.875-.625-2.25.875-1.125 1.375.75 1.875 1.375 3.5-1.5 2.375.5-1.875 2.75-1.125 2.625-.125-.75.875.5.875 2.25 2.25 1.125l1.25-3.875s3.5.125 3.25 1.375-1.125 1.125.75.125.875-2.75 2.125-1.625 1.875 2.25 2.375 1.125-1.125-2.375.375-2.125 1.625 1.625 2.5 0-.125-2.5 1.25-2.25.75.625 1.75-.25.75-1.75 1.75-.875 1 1.25 1 1.25 2 .25 2.5.5-.25-1 .25 1 .625 2.625 1.25 2.375 1-1.125 1 .5-1.125 2.125.375 1.875 1.875-.375 2 .75.75 2 .75 2 .125.875 0 1.375-.375.75-.125 1.375.5 1.625 0 1.875-1.25.75-2.125.875-1.375.75-1.625 1.375.75.25-.375 1.625-.75 1.625-1.5 1.875-1.625.75-1.625.75l-3.375.5-.75-1.375s-.5-1.125-1-.625.125 1.5-.375 1.625-1.75-2.125-1.75-1.125.625 2.75.625 2.75.125 1.5-.5 1.75-.625 1-2.25 1.125-1.75.875-2.625 1-1.125 1.875-2.75.625-6.125-3.25-7-3-1.25.625-3 .125-2.5.625-2.875-.125-.5.375-.125-1.375 2-2.625 2-2.625.625-.375.5-1 0-.875-.75-1-.5-.5-.875-1.5-.75-.875-1.75-.625-1.25 1.375-2.375.125-1.625-1-1.125-1.75.375-1 1.625-1.25 1.375 1 1.875-.5 1-2.125 1-2.125-.5-.25-1.375-.125-.625 1.125-1.625-.875-2.125-2-2.125-2-.25 0 .375-1 1.25-1 1.875-2-.5-1.875.375-2.75 1.125-.25 1.125-.25l.25.5z"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "#2293ac",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
        }}
      />
      <path
        id="path2418"
        d="M466.514 294.238s-.354.53-1.768.53c-1.414 0-1.591-.176-2.475.354-.884.53-1.944.707-2.828.884-.884.177-1.945 1.238-1.945 1.238s0 .707-1.237 1.06c-1.238.354-1.061.177-2.298.177-1.238 0-.884-1.06-1.061-1.768 0 0-4.152.412-2.902-.338s2.25-.25 1.375-.875-2.25-.75-.75-1 1.875 0 1.875-.5-1 .625 0-1 1.25-1.625 1.875-2.125.25-2 1.125-1.75 1.875.5 1.875.5l.5-1s-3.125-.125-3.375-.625c0 0-1.625-1.125-2.125-1.125s-1.625.125-1.25-.375 1.125-2 1.125-2-1.625-1.25-1-1.75.75-.375.75-1.25-1.125-1 .125-2.25 1.5-1 2.375-1.75.875-.875 1.5-.25.625 1.625 1.75.25 1.25-2.125 1.25-2.125-.5.125 1.375-.875.375-1.875 3.125-1.5 2.25.5 2.875.375 1-1.75 1.375-.375-.5 1.625 1.25 2.125 2.5.25 2 1.125-.625.75-.125 1.5.875 1.125.875 1.75-.375 1.125-1.25 1.5-.75-.125-1.875 1-1.75.875-1.75.875-.25-.625-1-.125-.375 1.25-1.5.5-2.5-.75-2.5-.75-.5 0-.375.75.75 3.25.75 3.25 1.125 2 .75 2.875-2.25 1.375-.625 1.5 1.5-.25 1.5.875 0 1.75 1 1.625 1.75 1 1.639.863z"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "#2293ac",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
        }}
      />
      <g
        id="g2391"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "#2293ac",
          fillOpacity: 1,
          stroke: "#000",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
        }}
      >
        <path
          id="path2416"
          d="M478.711 283.278c-.53-.618-.265-.53-.442-1.149-.176-.618.089-.707.089-1.326 0-.618.088-.883.353-1.679.265-.795-1.414-1.503-1.414-2.121 0-.619-1.06-1.414-1.237-1.768-.177-.354-.707-.796-1.326-.707-.619.088-.619.442-1.326.795-.707.354-.707-.176-1.237-.618-.53-.442-.442-.973-.442-1.945 0-.972.088-.53.442-.972.353-.442.442-.354.972-.972.53-.62.265-.442.265-1.061s0-1.15-.265-1.856c-.265-.707-.972-.177-1.238-.884-.265-.707-.353-.53-.795-.796-.442-.265-.619-.088-1.591-.176-.972-.089-.265-.62-.354-.973-.088-.353-.088-.53-.265-1.502-.177-.973-.619-.265-1.149-.177-.53.088-.707.088-.884-.796-.177-.883 0-.53-.088-.972-.089-.442-.177-.442-.796-1.414-.618-.972.089-.442.796-.972.707-.53.619-.796 1.237-1.238.619-.442 0-.618-.176-1.326-.177-.707-.53-.883-.53-.883s-.62.176-1.68.176-.972-.176-1.503-.884c-.53-.707.089-.707.884-1.325.796-.62.53-.973 1.326-1.857.795-.883 1.237-.795 2.21-.972.972-.177.53-.707.972-1.768.442-1.06.619-1.237.884-1.856.265-.618.795-1.414.972-2.563.177-1.15 1.625.759 4.625-.241s3 0 3 0 1.5 2.5-1 3.5-1 5-1 5l.739.05s.884-.708 1.591-.796c.707-.088.619.354 1.503.354.883 0 .707-.53 1.767-1.238 1.061-.707.796.796.796 1.414 0 .619 1.414 2.387 1.414 2.387l-.353.619s-.62.353-.62 1.325c0 .973-.264.707-.441 1.15-.177.441-.53.441-.972.707-.442.265.088.441.265 1.325.177.884-.089.442-.53.53-.442.089-.884.089-1.238.708-.354.618-.088.707-.619 1.414-.53.707-.442.442-1.59.795-1.15.354-.62.354-.354 1.68.265 1.326 1.149-.442 2.74-.619 1.59-.177 1.237 0 2.298 0 1.06 0 .619.089 1.326.619.707.53.176.795.53 1.414.354.619.707.265 1.15.884.441.619 0 1.237 0 2.121v.796s1.06 3.182 2.474 3.977c1.414.796.884.796 1.503 1.326.618.53 1.767 3.447 2.12 3.89.354.441.354.795.531 2.386.177 1.59 0 1.237-.177 1.856-.176.619-.265.53-.53 1.502-.265.973 0 1.15 0 1.503 0 .354.53.619 2.298-.265s1.06-.619 2.21-.972c1.149-.354.884-.442 1.944-.177 1.061.265.884.442 1.857 1.414.972.972.353 1.149.618 1.856.265.707-.088.619-.353 1.326-.265.707-.265.619-.707 1.503-.442.883-.177.707-.53 1.237-.354.53-.62.265-1.68.53-1.06.266-.884.884-1.414 1.415-.53.53-.354.707-.442 1.149-.089.442.442 1.237.442 1.237s.795.354 1.237.796c.442.441.265.795-.265 1.679s-.707.442-1.768.884c-1.06.442-1.414 0-2.475-.089-1.06-.088-.972.354-2.475.884-1.502.53-1.414.089-2.563 0-1.149-.088-1.06-.088-2.21 0-1.149.089-1.06.442-2.386 1.238-1.326.795-.795 0-1.237-.354-.442-.353-.707-.442-1.326-1.06-.619-.62-.619-.354-1.15-.177-.53.177-1.679 2.21-2.474 2.563-.796.354-.884.177-2.033.177-1.15 0-.796 0-1.326.088-.53.089-.884.972-1.59 1.768-.708.795-.531.265-1.857.442s-1.237-.089-1.414-.442c-.177-.354.177-.354.618-.972.442-.62 1.238-1.768 1.768-2.652.53-.884.796-.442 2.122-1.237 1.325-.796.265-.354.883-1.68.62-1.326.708-1.326 2.033-1.768 0 0 .572-1.17-.553-1.795s-1.625-.375-2.75-.875-2-.25-1.75-.938c1.125-1.312 1.375-1.937 1.75-2.562.375-.625.125-1.25.625-1.25s.75.25 1.375-.125.75-.625.75-1.375-.125-1 .125-1.75 1-1.375.375-1.875-.125-.375-.875-.625-1.25-.75-1.25-.75l.25-1 .188-1.75s.187.125 1.437.625 2 2.125 2 2.125c.266.472.651.46.336-.222z"
          style={{
            fill: "#2293ac",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "#000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        />
      </g>
      <path
        id="path12093"
        d="M500.406 213.094c-.046.04-.066.077-.125.125-.126.102-.294.243-.656.406-.255.115-.627.133-.969.156-.09.26-.108.487-.25.75-.298.554-.542 1.115-1.437 1.656-.387.235-.9.275-1.375.282-.005.012.005.02 0 .031-.263.59-2.494 2.136-3.742 2.431l-4.147-.513c-.147.442-2.186 1.54-2.549 1.832-.466.382-.886.765-1.781.969-.895.204-2.246-.277-2.75-.781-.796-.796-.768-1.03-.906-1.313-.002-.003-.03.003-.031 0-.646-.164-1.698-1.09-1.875-1.938-.178-.846.023-1.257.125-1.53.006-.018.024-.015.03-.032a2.581 2.581 0 0 1-.28-.219c-.18.137-.27.351-.47.438a3.096 3.096 0 0 1-1.656.219c-.518-.071-.75-.253-1.062-.407-.079.216-.055.414-.188.625-.352.564-.698.826-1.03 1.125.255.307.52.668.75 1.063.433-.01.901-.032 1.218.031.48.096.969.313.969.313a2.434 2.434 0 0 1 .812 3.718s-.183.145-.594 1.375c-.035.106-.186.24-.218.344.461.209.973.447 1.25.781.374.452.54.86.687 1.25.069.183.013.122.063.281.036.018.056.012.094.032.462.245.976.765 1.218 1.25.485.969.324 1.214.344 1.312.387 1.936-.797 2.904-1.281 3.25.022.006.04-.006.062 0 1.353.387.371.251 1.688-.125.786-.224 1.155-.122 1.531-.062.376.06.707.143 1.063.25.71.214 1.467.534 2.25.875a22.29 22.29 0 0 1 3.687 2.031c.342-.29.736-.668 1.531-.781-.22.031-.45.17.063-.156.513-.327 1.54-.785 2.719-.875.44-.034.157.035.125.062-.008.007.3-.193.343-.25-.069-.211-.094-.26-.187-.594-.181-.652-.406-1.399-.406-2.406 0-.379-.182-1.026.78-1.969.482-.471 1.337-.749 1.907-.719.348.019.488.108.688.188.672-.388 1.568-.642 2.25-.438.858.258 1.213.671 1.468.97.377.44.424.64.5.812l1.375-.188c.22-.124.575-.269 1.125-.5.176-.32.33-.683.844-1.312.102-.125.044-.033.063-.063.01-.346-.156-.704-.063-.937.458-1.145 1.66-2.608 3.531-2.875.02-.003.13-.086.156-.094-.1-.542-.218-1.128-.125-1.531.133-.576.195-.716.188-.688-.013.052.005-.048 0-.031-.145-.256-.188-.583-.344-1-.291.09-.628.162-1.531-.156-.633-.223-1.563-1.227-1.688-2-.067-.424.02-.512.063-.719a3.122 3.122 0 0 1-1.125-1.344c-.318-.694-.456-1.28-.625-2l-.813-.125a2.434 2.434 0 0 1-1.28-.562zm-17.187 3.844c-.033.192-.153.403-.25.625l.031.03.219-.562s-.007-.052 0-.094z"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "#47c1dc",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter12290)",
        }}
      />
      <g
        id="g12081"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "#47c1dc",
          fillOpacity: 1,
          stroke: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter12362)",
        }}
      >
        <path
          id="path12083"
          d="M476.563 246.406c-2.194.593-4.35-.267-4.782 2.625-.318 2.567-2.058 3.723-4.156 4.438 2.105 1.073 3.94 5.195.875 6.906 1.237.698 2.398 2.413 2.875 3.781 3.33 1.002 5.73 5.712 2.813 8.438 3.544-.31 5.236 3.77 6.625 6.312-1.55 2.7 1.587 6.283-2.125 7.375-.858 2.227-.494 5.412-3.594 5.969-.97 1.739 4.495 1.367 3.719 4.375.134 2.546-2.907 2.597-2.97 5.188 1.79-.083 3.842-4.946 6.47-2.094 1.515 1.66 3.878-1.382 6.125-.219 2.286.692 4.275-1.807 6.656-.688-2.658-3.175.649-6.766 3.281-7.906 2.274-2.367-.82-4.631-2.938-2.281-3.811 2.875-6.805-2.17-4.437-5.375.379-3.977-2.954-6.624-5.281-9.25-1.931-2.233-.397-7.12-3.906-7.25-2.378 1.65-5.65 1.252-5.813-2.219-.125-2.782 3.39-2.385 3.938-4.906-.019-1.451 3.538-3.516 1.812-5.125-2.596-.67-6.244 2.29-6.906-1.656-.738-2.24-.081-5.392 1.719-6.438z"
          style={{
            fill: "#47c1dc",
            fillOpacity: 1,
            fillRule: "evenodd",
            stroke: "none",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        />
      </g>
      <path
        id="path12104"
        d="M467.469 272.625c3.176 2.562-2.724 3.457-4.563 2.313-2.7 1.305-3.782 6.57-7.437 4.78-2.207-.501-2.016 3.645-.688 4.188-2.755 4.592 8.519.836 5.366 4.645-.631 3.786-3.117 2.146-4.96 4.23 3.216-5.657 8.383-13.698 12.282-20.156zm-1.344 2.875c-.529-.223-.145-1.993 0 0zm1.719 1.313c.747-2.353.899-2.63 0 0zm2.25-1.313c1.632-.897 1.145 2.8-1 1.719-1.396.266.35-3.332 1-1.719zm.062 3.469c2.183-.579 1.348 2.195.375.812.521 1.193-.774-.631-.312 1.313-.323-2.497-1.165.527-.313-2.031.706-.443 2.384-1.492.25-.094zm-.875 2.469c-1.743-2.043-1.62-2.16 0 0zm-1.844-.657c2.479 1.182-1.201 3.031-.437 1.25-1.075-.515-.165-1.57.438-1.25zm-1.312 1.844c-1.008-.796-1.068 1.995-1.281.563-2.526-.064-.217-3.034.781-1.5-.927-2.723.76.432.5.937zM460 285.656c2.32-.678 2.824-.68 0 0zm.813 2.438c1.46-1.033 2.583-1.106 0 0zm.75.031c1.647.243 1.083 2.885.968 1.844-2.247-.384-.965-1.98-1.656-1.719.926-.278 3.396-1.19.688-.125zm.28 2.375c-2.208-1.908-1.58-2.685 0 0zm-.937 2.031c.025-1.303 1.847-2.727 0 0zM463.75 291c-.506.793.053 2.446 1.625 1.688 3.371 3.061-3.968 3.777-3.219.28-.289-.36-1.201-3.068 1.594-1.968zm-9 2.25-.063.063.063-.063zm7.188 2.063c-1.058-1.831-1.02-.69-.404-.9l.404.9zm-7.407-1.75c.026 1.62-1.16 4.584-3.625 4.53-2.026-1.571-1.204-4.682 2.09-4.13l.969-.253.566-.147zm-4.406 1.312c.123-.21-.402-.133 0 0zm11.094.719c-.908-2.426-.688-2.838 0 0zm-1.094.281c-.892-2.804-.338-2.519 0 0zm-.844.188c-1.054-2.478-.8-2.561 0 0zm-3.062.468c2.051 1.686-.196 1.437-.688.469-.217-.533.442-1.04.688-.469zm-2.313-.062c2.72-.725.91 3.757 1.094 1.031-2.104 1.052-1.537.726-1.625.281.84.007-.144-1.455.531-1.312z"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
        }}
      />
      <path
        id="path12110"
        d="M463.063 275.594c-.388.431-.865.896-1.47 1.219-.434.231-.262.139-.437.25-.271.568-.694 1.262-1.375 2.093-.38.465-.712.877-1.469 1.281-.756.405-2.412.344-3.156-.187-.023-.016-.01-.015-.031-.031-.099.056-.323.22-.375.25-.072.041-.217.175-.281.219.063.282.156.457.156.812 0 .356-.072.89-.25 1.438.455.62.615 1.408.438 2.156l.156.094c.493.296.817.532.906.593.155.034.415.09.719.125.688.08 1.375.094 1.375.094.6.026 1.174.258 1.625.656-.124-.477-.513-1.92-.688-2.969-.155-.934.172-2.357 1.031-3.093.86-.737 1.938-.719 1.938-.719s1.233.133 2.625.656c.604-.37 1.457-.447 2.281-.375a5.726 5.726 0 0 1 1.75-1.187 3.952 3.952 0 0 1-.281-.531c-.082-.174-.067-.551-.125-.844-.485-.14-.913-.28-1.469-.656-.29-.197-.41-.627-.656-1-.326-.003-.652.033-.813 0-.333-.07-.715-.165-2.03-.344-.087-.012-.022.007-.094 0zm-3.688 15.75a2.623 2.623 0 0 1-2.625.812l-.156-.031c-.195.276-.232.523-.594.813-.615.492-.671.686-.875 1V294c0 .226-.041.616-.188 1.031v.031c.173.217.31.46.407.72.082-.134.176-.26.281-.376 0 0 .386-.377.906-.781s1.16-.938 2.406-1.188c.714-.142 1.09-.274 1.47-.406-.295-.173-.589-.439-.907-.969-.126-.209-.063-.465-.125-.718z"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          fill: "#47c1dc",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10.43299961,
          strokeDashoffset: 0,
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter12358)",
        }}
      />
      <path
        id="path11181"
        d="M722.688 151.813c-8.52 1.772-27.938 4.1-27.875 13.125 8.55 5.218-2.406 11.56-5.852 11.747 8.598 9.738-13.486 6.82-7.611 8.401 17.634-.105 5.005 21.387-7.125 10.63-5.333-2.914-9.439-20.117-6.456-4.571 1.34 15.159-6.519 26.99-2.617 41.275 3.305 7.589-3.626 12.698 5.723 17.699-1.542 8.894 1.54 19.418-8.844 23.684-7.446 6.99-28.02.108-28.468 15.161-.178 13.007 19.521-.082 16.055 15.983-1.485 6.012-6.712 9.097 1.53 12.518 2.635 9.57 13.35 28.796-2.829 34.189-12.472-7.404-25.18.82-37.412-1.465-10.32-11.66-21.757 4.367-33.156-3.158-3.402 4.236-1.098 22.399 9.972 17.058 8.242 4.375 23.82-4.75 20.707 12.024-1.598 15.281.883 28.306 11.32 39.98 6.394 8.928 16.419 14.725 17.719 26.22 15.06-.29 27.282-12.785 31.169-25.655 7.219-18.346-18.672-4.673-20.82-19.314-9.045-7.128-10.232-22.921 5.026-21.327 5.781 3.473 1.415 19.195 11.218 9.764 5.677 5.219 8.667.185 12.89-2.723 11.179-4.226 17.68 6.518 23.267 13.66 11.141 4.743-.01 23.214 10.75 31.5 2.228 7.778 10.183 23.445 10.452 6.179.937-12.626 5.722-24.601 9.054-36.208 5.522-11.964 20.429-12.296 22.431 2.28 4.42 10.029 20.947 8.075 19.219 23.062 5.941-12.834 16.41 7.266 18.98 3.748 5.54-9.567-1.204-20.845-8.846-21.215 4.063-6.89-10.25-10.43-3.164-19.862 5.464-7.966 16.992.742 20.999-12.17 9.122-9.373 9.252-22.324 5.71-33.778-9.66-6.583-2.697-20.367-12.982-22.479-4.201-9.516 10.698-21.502 16.581-11.821-3.333-13.504 12.57-22.418 10.586-36.307-.56-10.827-2.128-25.201-12.052-28.99-17.813-.364-3.992-27.058 8.523-25.49 8.707.57 11.652-1.788 10.515-10.657 10.706-7.323 13.902 20.255 19.896 6.033 7.126 3.833 14.697-9.276 13.781-12.372-12.25-8.007 13.461-8.67 3.192-15.296-9.155-6.817-19.481-11.954-29.727-6.218-9.843-1.383-17.915-5.115-26.878-3.417-8.098-11.259-23.463-6.495-34.042 1.776-3.742-5.48-8.83-17.263-16.757-8.239-11.088-6.157-20.719 1.253-31.128 5.473-13.342-6.927 15.635-16.314-1.068-19.379l-1.557-1.059zm-57.594 23.03c-.575 2.671 2.557.95 0 0zm207.281 13.626c4.714 11.298 8.856.006 0 0zM843.25 222.28c-4.875 7.13 1.975 32.792 3.807 13.219.283-4.693-1.737-9.136-3.807-13.219zm-31.531 86c3.457 5.813 4.507.717 0 0z"
        style={{
          opacity: 1,
          fill: "#89db8c",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter11217)",
        }}
      />
      <path
        id="path11211"
        d="M858.25 260.875c.022.006-.218-.055-.813.188-.255.11-.538.142-.812.093-.936-.19-1.64.04-2.688.625-.928.526-1.822.52-2.656.5-.724-.016-1.353-.069-1.875-.094.024.051.045.103.063.157.558 1.593.79 3.44.343 5.187-.141.554-.519 1.029-.843 1.531.228.025.456.117.687.188 1.515-.226 3.168-.088 4.125-.25.519-.088.646-.233.594-.156-.052.077.116.003-.188-.75l-.03-.031c-.904-2.405.182-4.728 1.812-5.907.722-.522 1.554-.842 2.406-1.031a1.517 1.517 0 0 1-.125-.25zm-9.25 21.25c-.673.983-.68 2.064-.219 3.531.504 1.6 1.54 3.383 2.282 5 .885 1.944.483 3.938-.407 5.375-.792 1.28-1.887 2.203-2.906 2.969-.25 1.57-1.02 2.87-2.063 3.625-.927.672-1.854.997-2.75 1.344.281 3.474-1.061 6.52-2.375 9.469-.293.64-1.009.97-1.687.78-1.082-.296-1.75-.147-2.219.157-.272.177-.515.485-.718.906a4.714 4.714 0 0 1 1.937-.062c.239.037.465.133.656.281.093.074.051.065.125.063.074-.003.26-.047.532-.188.543-.282 1.304-.917 2.062-1.5.379-.292.761-.579 1.219-.813.457-.233 1.053-.468 1.812-.28.76.186 1.339.843 1.594 1.468.248.608.353 1.28.406 2.125.19-.13.377-.317.438-.438.076-.15.107-.07 0-.25a1.432 1.432 0 0 1-.219-.718c-.032-1.06.278-2.015.813-2.719.534-.704 1.196-1.102 1.812-1.406 1.231-.608 2.234-.955 2.656-1.438.28-.327.694-.511 1.125-.5.871.028.775-.026 1.157-.531.297-.393.821-1.13 1.625-1.781.221-1.592 1.27-2.73 2.218-3.438-1.658-2-2.776-4.5-2.343-7.5-.734-1.06-1.095-2.247-1.032-3.344.077-1.328.474-2.536.782-3.625.307-1.088.532-2.04.468-2.687-.06-.616-.23-1.02-1-1.531-1.69-.148-2.98-.864-3.812-1.469-.744-.54-1.258-.82-1.969-.875zm-15.313 38.438c-.041.069-.084.15-.125.218-.673 1.13-.973 2.008-1.062 2.375.08.068.055.072.219.156.369.191.913.37 1.437.47.163.03.251.014.407.03a19.348 19.348 0 0 1-.875-3.25zm-3.656 6.75c-.015-.005-.042.032-.062.03.06.122.067.224.187.344.026.026.066.009.094.032-.002-.052.045-.125.031-.156-.073-.174-.088-.2-.25-.25z"
        style={{
          opacity: 1,
          fill: "#85df8e",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter11461)",
        }}
      />
      <path
        id="path11259"
        d="M653.969 539.219c-2.257 1.582-4.05 3.092-5.5 5.437-3.122 3.266-8.285.989-11.532 2.875-.424 1.502-1.511 2.118.563 3.063 3.464 1.942 2.088 7.457-1.469 8.468-2.068 4.125 1.357 7.758 3.407 11.063-2.629-1.326-7.188-3.844-8.032.469 2.038 2.328 3.623 5.82 2.688 8.625 3.03.483 4.743-.672 6.125-3.032 4.1-2.239 2.86-8.287 6.812-10.968.918-3.772 4.065-6.724 3.375-10.813.84-4.316.852-9.41 3.5-13.031 1.194-.526.278-1.58.063-2.156z"
        style={{
          opacity: 1,
          fill: "#9d7902",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter11297)",
        }}
      />
      <path
        id="path11245"
        d="M531.156 374.875c-10.263 1.677-18.746 9-29.31 9.793-13.464-1.382-13.152 15.946-18.883 24.896-8.098 8.174-1.344 17.877-3.303 27.868-6.032 10.523 8.001 13.736 9.056 23.167 7.253 8.176 16.747 10.858 27.423 6.445 7.457-4.257 15.887-.202 21.119 3.928 12.676-2.147 8.474 14.326 5.314 20.444 3.469 7.215 14.866 13.922 12.2 23.342-4.9 5.556 3.898 13.545-3.197 19.646-4.953 9.392 1.944 17.844 6.412 25.46.525 10.668 6.567 18.901 7.776 29.488-3.075 12.02 10.109 5.179 15.936 4.338 5.604-3.725 11.884-4.633 12.734-12.94 4.94-5.935 5.088-14.888 10.88-20.852-2.737-8.585 4.366-14.768 9.56-20.005 8.002-5.98 1.786-13.988.08-19.903-2.124-6.536-4.326-18.27 3.86-22.334 6.363-5.813 10.063-14.028 17.456-18.874 3.735-4.531 11.218-15.648 8.184-18.54-9.478 4.237-23.7 4.876-23.173-8.11-6.574-5.965-8.61-15.226-12.012-23.146-6.125-5.852-5.63-16.236-12.53-21.949-1.887-6.826-4.19-9.782-11.8-10.288-8.554-.935-15.65-7.212-24.255-2.745-10.51 1.807-22.077-6.288-25.945-15.727-1.692-.804-2.251-2.296-3.582-3.402z"
        style={{
          opacity: 1,
          fill: "#9c7805",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter11377)",
        }}
      />
      <path
        id="path11465"
        d="M845.375 501.938c-4.387.654-9.464 2.201-8.843 7.79-.593 4.508-5.916 4.616-9.063 2.71-2.399 3.892-5.995 5.903-9.026 8.773-5.225.836-5.75 6.356-9.963 8.587-3.113 2.886-6.38 4.555-10.692 4.11-1.298 4.442-11.01 4.008-6.497 9.103.348 4.054-.613 8.769-3.644 10.888 1.917 4.195 3.838 8.721 3.948 12.894 4.756 3.714 3.84 9.15 2.31 14.1-3.765 4.65 3.902 5.196 6.106 1.86 4.48-3.391 9.605-7.42 15.637-6.14 2.056-1.386 4.895-5.595 8.988-5.397 4.898-1.848 9.605-5.12 15.143-2.996 3.983.212 8.207 3.335 8.034 7.624 2.495-2.167 3.204-7.922 8.226-5.485 5.078 1.748 3.941 7.313 2.658 10.916 2.484 4.004.492 10.428 4.055 13.345 3.42-4.638 8.914 1.907 11.702-2.51 3.35-2.025 7.56.19 7.679-4.933 1.237-3.784 2.444-7.451 4.424-10.952 3.119-2.85 1.006-8.534 6.085-10.207 2.858-4.342 3.407-12.504 1.819-18.152-3.02-4.367-5.95-8.852-8.483-13.203.287-5.687-6.338-4.83-8.757-8.64-2.762-3.852 1.365-9.274-2.002-12.68-2.295 1.306-5.936-3.845-4.718 1.49-.258 4.98-6.282 6.601-10.254 5.072-4.012-1.396-4.468-6.836-9.125-5.508-5.846-1.68-2.554-10.56-2.883-12.192-.96-.043-1.897-.332-2.864-.267z"
        style={{
          opacity: 1,
          fill: "#a31aa6",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter11563)",
        }}
      />
      <path
        id="path11471"
        d="M748.594 469.5c.658 1.391 2.328 1.69.732.103l-.226-.105-.506.002zm5.312 6.375c1.72 3.427 4.087 6.761 4.282 10.719 5.453 2.478 7.384 8.638 9.75 13.656 1.832 1.538 5.906 5.477 7.615 2.325-.933-2.556-6.376-.673-5.535-4.887.346-3.101-2.511-4.341-4.107-6.356-1.647-2.76-.894-6.15-1.973-9.082-2.183-1.136-4.356-2.313-6.711-2.548-1.467-1.01-.866-4.315-3.32-3.827z"
        style={{
          opacity: 1,
          fill: "#a914ac",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter11855)",
        }}
      />
      <path
        id="path11473"
        d="M793.844 457.844c-1.75 3.093-3.972 5.916-5.067 9.27-2.78 3.931-6.725 7.232-11.433 8.511-.915 3.543-.251 7.604 2.281 10.344.007 2.84.73 5.803 3.974 6.35 3.051 1.494 7.424-.276 7.901-3.819-3.018-1.503-3.107-5.607-1.273-8.067.993-2.974 6.824-3.111 4.798-6.902-2.204-3.214-2.253-7.756.646-10.58 1.785-1.567 2.322-3.652-.455-4.325-.462-.253-.928-.5-1.372-.782z"
        style={{
          opacity: 1,
          fill: "#a914ac",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter11747)",
        }}
      />
      <path
        id="path11475"
        d="M820.906 448.313c-1.053 1.91 2.45 3.481 2.187 5.105 1.609.522 3.787.048 2.542-1.972-.616-1.868-3.068-2.544-4.729-3.134zm19.5 2c-2.208-.04-2.184 2.645-2.777 4.163-.85 1.568-1.895 3.104-1.68 5.02.033 2.11 1.01 4.166 2.582 5.567 1.44 3.479-.231 7.135-.562 10.656 2.293 1.487 4.86 3.652 7.788 2.782 2.005-.516 5.05.385 6.024-2.157 1.661-2.399 5.014-2.526 7.483-1.45 2.458 1.005 4.793 2.564 6.33 4.762-.446-3.183-3.613-5.6-3.076-8.978.728-1.287 1.2-2.955-.688-3.444-2.068-.816-4.286-1.262-6.17-2.5-1.408-.93-3.61-1.755-3.78-3.637.785-1.285 3.573-.437 3.968-.537-4.459-1.423-8.03-4.903-10.317-8.904-1.774-.07-3.58-.436-5.125-1.344zm-10.687 7.812c-1.08.612-1.201 1.463.177.85 1.427-.202.698-.299-.177-.85z"
        style={{
          opacity: 1,
          fill: "#ad12ae",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter11579)",
        }}
      />
      <path
        id="path11583"
        d="M812.125 477.438c-2.95 1.69-7.265-.242-9.488 2.844.529 3.572-1.95 6.913-1.918 10.53-1.707 1.663.954 5.984.163 6.38.986-3.566 5.326-3.024 5.695.6-.004 1.473 3.356 3.24 1.28 1.113-1.157-2.202-.333-5.725-3.341-6.314-1.348-2.4-.203-5.843.393-7.644-3.53-2.227.115-7.706 3.59-5.586 1.227.063 3.753-.269 3.626-1.923z"
        style={{
          opacity: 1,
          fill: "#a715a9",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter11627)",
        }}
      />
      <path
        id="path11869"
        d="M785.375 507.531c-1.038 1.118-5.15 2.313-3.756 3.352 3.326.106 6.601.433 9.768-.654 3.468.079 6.64 2.568 10.176 1.646 1.606 1.657 2.912-.983.466-.682-4.383-.242-7.841-4.392-12.404-3.443-1.417-.063-2.832-.18-4.25-.219z"
        style={{
          opacity: 1,
          fill: "#bb10bf",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter12053)",
        }}
      />
      <path
        id="path12115"
        d="M432.906 141.063c-2.974 1.518-7.019 3.331-9.344 4.093-.747 4.23-6.421 3.65-8.03 6.906-1.726 5.092-8.35 1.788-11.344 4.625-3.98.095-7.723 1.848-10.045 5.116-1.271 1.01-.327 4.49-2.827 5.299 1.817-2.424-2.044 3.204-4.128 1.742 1.275 2.248-3.804 5.46.633 3.302 3.55-3.524 8.4-1.609 11.741.417 3.073 2.311 5.906 5.633 6.47 9.687 2.456 2.926 1.593 6.795 5.44 8.55.56 3.5 4.438 5.454 3.275 9.353.18 3.074-2.794 5.806-3.528 7.722 2.103 3.955.898 8.257 2.713 12.296.999 3.547 5.348 3.482 6.92 6.382 1.443-.318.768-4.77 2.503-6.243-.196-4.212 3.368-6.421 2.051-10.435-.31-4.397 4.822-6.59 8.58-6.238 4.005 1.257 4.077-4.724 7.983-4.168 2.339-1.904 5.14-2.08 4.946-5.864.975-2.625 4.279-2.543 6.116-2.074-1.33-3.16 1.029-7.765 3.594-9.406-3.66-3.583 1.409-8.056 5.219-7.938 2.123-1.013-.05-6.462 2.344-8.656-4.957-1.8-1.595-6.857-2.242-10.327 1.964-4.365-4.44-2.09-6.915-1.923-2.895-.802-5.125-1.923-8.375-1.844-4.082-.756-3.666-7.156.344-7.656-.821-1.708-6.409-.793-9.063-2.437-1.679-.076-3.37.051-5.03-.281zm34.406 4.25.188.812-.188-.813zm-6.218 33.5-.281.812.28-.813zm-36.313 41.28c-.19-.062-.722.393 0 0zm-7.5 4.688.25.281-.25-.28z"
        style={{
          opacity: 1,
          fill: "#dadd23",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter12450)",
        }}
      />
      <path
        id="path12117"
        d="M224.656 178c-5.546 2.204-17.73 4.261-8.422 11.322-1.107 5.925-7.418 6.39-5.397 12.991-1.78 7.887-18.127 2.013-10.087 11.45 2.215 4.463 9.536-.458 11.594 5.674 4.993-10.034 16.477-5.393 23.936-3.595 5.565 5.453 15.756 5.56 17.323 14.784 2.839 8.346 9.247 15.808 12 24.543 3.677 8.722 3.124 17.48-1.221 26.26-2.382 10.613-5.336 22.63 2.277 31.86-.419 10.756 9.903 15.682 9.09 26.776 1.37 9.638 10.938 5.183 17.938 6.06-5.726 2.007-6.025 3.964-3.16 8.316-5.006 10.29 8.518 7.931 13.56 12.65 6.386 1.903 6.95 21.657 11.255 7.936-1.244-2.513-4.837-9.965-.018-12.935-9.447 6.205-21.566-3.82-17.512-14.217-1.21-8.242 7.765-16.244 15.142-19.147 9.242-3 18.695-2.483 27.952-.694 6.51-4.055 10.094 9.718 10.483-1.217 1.496-8.016 17.347-7.766 11.973-17.656 4.433-8.054 13.504-12.566 14.587-22.613 3.39-6.437 19.258-7.465 10.272-13.56-9.874 5.521-11.764-12.545-1.193-13.037 5.808-2.655 12.926 1.671 16.012-5.618 5.683-.458 9.747-3.845 3.522-7.52-1.607-5.658-5.537-.405-6.18-7.772-.707-6.956-5.893-8.701-11.2-4.907-8.508-.748-2.814-19.758-11.5-14.531-.61 5.61-7.473 8.13-2.656 14.379.866 8.618-10.685 9.945-7.971 18-2.615 3.686-4.792 21.467-10.051 11.492-4.552-5.793-3.309-14.283-7.704-19.096-8.372 4.27-17.038-8.03-21.009-15.843-1.958-10.85 6.873-19.57 14.584-25.722-1.84-6.418 4.445-12.994 8.688-5.157 7.539-5.205-3.485-6.658-5.97-10.687-7.386 5.234-16.985 4.536-24.324 3.655-9.254 4.057-19.568 5.208-26.934-3.524-7.15-4.36-13.274-4.787-21.168-1.133-9.707 4.57-18.548-1.7-28.727-.503-6.719-2.179-14.065-3.733-19.784-7.464zm134.75 13.781c-2.335.25.95.63 0 0zm-155.25 2.25c-1.559 2.696 3.93.872 0 0z"
        style={{
          opacity: 1,
          fill: "#d9dd23",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter12418)",
        }}
      />
      <path
        id="path12123"
        d="M345.656 385.375c-5.808 5.107-17.985 4.866-18.534 14.228-4.82 7.768-4.57 16.227-9.332 24.056-.34 6.76-1.105 13.714 3.78 19.737 2.864 5.946 9.827 10.154 10.254 17.14 6.176 3.914 12.388 7.599 16.986 13.085 2.426 8.843-1.229 18.344.065 27.067-2.733 7.236.298 14.991-1.7 22.346 1.102 7.22-5.466 15.963.294 21.872-.226 8.388-5.561 17.352-.916 25.267.712 9.374 6.372 17.86 15.307 21.185 6.642 4.966-1.541-5.648-.9-8.546-.645-8.04 2.403-16.284.541-24.539 6.36-4.658 2.268-16.242 9.524-18.411-9.033-7.658 12.982-4.45 13.133-8.492-7.964-6.417 1.96-11.547 8.404-11.058 7.41-3.286 7.944-11.86 13.033-16.719-.817-7.779 2.935-18.753 12.356-19.048 10.09.63 14.528-9.912 16.522-17.354.086-8.184 1.544-16.437 6.376-22.01 10.099-1.463 4.306-13.363-2.731-14.672-8.227-2.64-16.242-5.365-24.391-7.435-7.892 2.077-16.899-5.61-10.627-11.561-1.348-10.47-14.967-4.95-20.814-10.439-6.109-2.894-9.728-11.636-17.08-11.304-5.632-1.903-16.565 1.522-19.55-4.395zm47.938 134.313z"
        style={{
          opacity: 1,
          fill: "#ea4224",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
          display: "inline",
          filter: "url(#filter12466)",
        }}
      />
      <rect
        id="rect13036"
        width={749.819}
        height={519.068}
        x={167.063}
        y={117.462}
        rx={2.32}
        ry={0}
        style={{
          opacity: 1,
          fill: "none",
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "none",
          strokeWidth: 1.20000005,
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          enableBackground: "accumulate",
        }}
        transform="translate(.934 1.093)"
      />
    </g>
    <g
      id="layer4"
      style={{
        opacity: 1,
        display: "inline",
      }}
      transform="translate(-167.997 -118.555)"
    >
      <path
        id="eastern_australia"
        d="M832.088 509.73s.177.53.707-1.592c.53-2.121.177-3.182.884-4.773.707-1.59 1.06-1.414 2.475-2.121 1.414-.707 1.768-1.06 2.121-1.768.354-.707 1.414-.884 2.475-.707 1.06.177 1.591.707 2.475-.53.884-1.238.707-1.591 1.59-1.238.885.354.354.354 1.592.707 1.237.354 2.475.884 4.95.354 2.474-.53 2.651-1.768 2.828-.354.177 1.415.177 1.591 1.06 1.591.885 0 .885.177.354 1.238-.53 1.06-.177.353-1.59 2.298-1.415 1.945-2.122 2.121-2.299 3.535-.177 1.415.177 2.299.177 2.299s-.707 1.944.53 1.944c1.238 0 1.414-.53 3.005-.707 1.591-.177 3.006-.354 3.182 1.237.177 1.591 1.238 4.597 2.299 4.773 1.06.177 1.06.53 2.828.177 1.768-.353 2.475.53 2.652-1.06.176-1.591.176-1.945.176-3.182 0-1.238-1.767.707.53-2.829 2.299-3.535 2.83-1.237 2.299-5.126-.53-3.89-1.591-3.536-.707-6.01.884-2.476.53-2.476 1.06-2.299 0 0 1.591-.177 1.768 2.298.177 2.475.884 4.596.884 5.657 0 1.06.707 4.95.707 4.95s1.238 1.414 1.945.884c.707-.53 1.767-.707 1.767-1.945 0-1.237.354-2.651.708-1.944.353.707 1.414 1.237 1.414 2.298 0 1.06-.177 2.121 0 3.182.177 1.06 1.237 2.121 1.237 2.121s.354 2.121.354 2.828c0 .708.353 1.238 0 3.006-.354 1.767-.354 1.944-.177 3.535.177 1.591.354 2.298 1.06 2.475.708.177.708.177 1.415.177.707 0 .884-.707 1.414.177.53.883.707 1.414 1.945 1.59 1.237.177 2.298 0 2.298 0s.53.884.53 1.945c0 1.06-.177 1.414.177 2.829.353 1.414.353 1.59 1.237 1.767.884.177 1.414.354 1.414.354s.177.884.177 2.298c0 1.414.354 2.298.354 2.298l1.414 1.06s.354.885 1.06 1.769c.708.883 1.415 1.06 1.415 1.06s.53 1.06.707 1.945c.177.884-.354.353.707 1.59 1.06 1.238 1.237 1.592 1.237 2.652 0 1.061.884 1.768.53 3.182-.353 1.415-.176 1.945-.353 3.713-.177 1.767.177-.354-.177 2.651-.353 3.005-.176 3.89-.353 4.95s-.53.177-.707 2.121c-.177 1.945-.354 3.536-.354 3.536s-1.237 1.768-2.121 1.768c-.884 0-2.475-.707-2.475.176 0 .884-.884 1.591.354 1.945 1.237.354 1.59-.707 1.59.53 0 1.238-.353 1.591-1.414 2.475-1.06.884-1.06.707-2.298 1.414-1.237.707-.53-.353-1.414 1.945-.884 2.298-.707 2.298-1.414 3.182-.707.884-.884.884-1.238 1.944-.353 1.061-.353 1.415-.353 2.652 0 1.238-.354 1.768-.354 1.768s-1.414 1.414-1.414 2.652c0 1.237.884 1.767.177 2.651-.707.884 0 .884-1.591 1.06-1.591.178-2.298.178-2.298.178l-2.475.53s-.354-1.06-1.237-.53c-.884.53-.53.353-1.238 1.237-.707.884-.884.884-1.768 1.414-.884.53 0 .707-.53 1.591s-.707 1.768-1.768 1.238c-1.06-.53-1.414-.354-1.768-1.415-.353-1.06.177-1.237-1.59-1.767-1.768-.53-1.945-.53-1.945-.53s-.53.353-.884 1.237c-.354.884.177 1.237-1.06 1.768-1.238.53-1.238 1.06-2.476.176l.236-.27s0-5.656.177-7.07c.176-1.414-.354-1.238-1.061-2.298s.884-42.25.707-43.134c-.177-.884-29.875.354-29.875.354l-.59-37.738z"
        className="land oceania"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "eastern_australia").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12951)",
          enableBackground: "accumulate",
        }}
        
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "eastern_australia").owner ? `#eastern_australia_${phase}_modal` : null}

      />
      <path
        id="indonesia"
        d="M778.125 511.375C779 512.75 778.5 513 780.5 513s3.25-.375 4.375-.125.625.625 1.875.5 2.375-.875 3.375-1 2.25-.25 3 0 1.875 1.125 3.25 1.25 4.5.125 5 .25 2.125 1.375 2.875.5 1-.625 1.25-2 .25-2.125-.625-2.375-.25-.75-2.375-.875-2.75-.375-3.375-.625-1.625-1.25-2.375-1.5-2.875-1.125-4.25-1.125-4.125-.25-5.5-.25-1.625-.625-3.125.5-2.75 1.625-3.625 2.25-.625.125-1 1.375-.75 1.875-1.125 1.625zm23.375-8.125c.5-1.75.125-1.5.25-3s.5-1.125 1.125-2.125.25-2.625 1.375-.75.75 2.625 2.125 3.75 1.625 2.375 2.75 1.25 3.25-2.25 2-3.625-2 0-2.125-3.25-.25-4.375-1.125-4.25-1.625 1.375-1.75-.375-.625-3.875.75-4 2.75.75 3.625-.875 1.875-2.125.25-2.375-2.875-.5-3.75-.375-1.5.125-1.375-.625-.875-1.5.875-1.5 1.375.375 3 .25 3.25-1 3.75-1.5 1.125-2.75 1.875-3.25 1.25-.875 1.125-1.5-.375-1.125-1.125-1.375-2-.5-2.375 0-1.25 1.875-2.125 2.25-5.125.125-6.125.625-1.875 1.125-2.5 1.5-2 1-1.75 2.5.25 2.75.25 3.375-1.25 2.375-1.5 3 .125 2.5-.25 3.375-.625.375-.625 1.625-.25 1.5.125 2.375 1 .875.625 2.125-1 .5-.5 1.875 1.125.875 1.25 2.125-.25 1.75 0 2.75 2 .125 1.875 0zm-10.5-6.375s-.25-1.25 1.875-3.375 2.75-2.25 2.75-4.375-.125-2-1.125-3-2.375-1.625-1.125-3.125 1.125-1.875 2.75-2.25 3.25-2.75 3.375-3.625.25-1.375-.125-2.5-1.375-3.125-1.5-4.5-.25-2.375-.125-3.375 1-1 2.125-2.375 1.375-.75 1.375-2.75-.125-4.5-.75-5-.875-.25-2.25-.75-2-1.75-3.875-2.875-3.125-1.25-3.5-.625.375-1.5-.375 1.625-.625 3.875-1.5 4.5-2.25 1-2.625 2.25 1 2.125-1 4.25-5.625 6.125-8.25 6.625-4.5 1.125-4.5 2 1.125 2 .875 3-2 2-1.75 2.5.875 0 1.375 1.125.5 4.625.5 4.625L776 487.5s-1.75 2.625-.875 3.375 1.25.875 2.25 2 2.25 2.375 3.75 2.5 2.375.875 3.5 1.375 1.5 0 2.875-.125 3.875.375 3.5.25zm-23.612-17.021.707-1.768s.177 1.945.353 3.005c.177 1.061-.353 2.475.177 3.182.53.708.177 1.061 0 2.122-.177 1.06.707 2.828.707 2.828l1.293 1.527L772 491s.625.875.875 1.5 1.125 1 1.125 1v2.25c0 .875-1 1.375.125 1.625s2.5.25 3.25.25.5.375 1 1.375 1 1.125 1.125 2.5.125 2.375-.375 3-.125 1.125-.75 1.875-1.625.875-2.375 1-1 .125-1.25 1 1.625 1.75-.75 1.625-2.25.5-2.75-.75.875-1.75-.875-2.375-.25 1.875-2.875-1.625-3.5-1.125-3.875-4.25-1.5-3.875-3-6.25-2.125-4-3.375-4.375-1.75 1.125-2.375-.5-.625-.75-.625-2.625-.125-1.75-1-3.5-1-1.625-1.5-3.5-.25-1-2.5-3.875-2.5-3.125-4.5-4.625-2.5-1.75-2.375-3.75-1.25-4 0-4.375 1.5-.75 2.75 0 1.375 1.625 2.375 1.875 1.625.125 2.375.125.5-1 1.75.5 1.5 1.5 2.125 2.875.625 1.875 1.25 2.625 1.125.75 1.75.375 1.25-1.5 1.625-.75.375 1.125.625 1.625 1-1.125 1 1-.75 3.125.375 2.375l2.25-1.5s-.125-.375.375.875.625 2.375 1.75 2.875 1.5.5 1.5.5l1.138.854z"
        className="land oceania"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "indonesia").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12863)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "indonesia").owner ? `#indonesia_${phase}_modal` : null}


      />
      <path
        id="new_guinea"
        d="M832.75 455.5s.5-2.75 1.5-3.5.25-1 .25-2.25-1-2.5.25-2.75 1.5 0 3.25-.25 3.5-1.25 3.5-1.25l1.5 1.5s.75.75 3 .75 3 1 4 2.75.5 2.5 3.25 4.25 5.5 2.5 7 3 2.75 1.25 2.5 2.75 1.5 2.25-.5 2.75c0 0 5.724 2.462 6.43 4.053.708 1.59 1.945 2.298.531 3.182-1.414.884-3.005.177-2.828 1.237.176 1.06 1.237 1.768 1.59 3.005.354 1.238 1.592 1.945 1.592 3.36 0 1.413-.354 2.297 1.06 3.181 1.414.884 1.591.884 1.591 1.945v2.475s-1.06 1.06-2.828 1.06c-1.768 0-2.652-1.414-3.359-1.414-.707 0-2.475-.353-2.475-.353s-1.237-4.95-4.773-5.834c-3.535-.884-3.535-1.414-3.535-.707s1.237 2.298-.177 2.828c-1.414.53-2.121.53-3.005.53-.884 0 3.005 1.592-1.415 1.415-4.419-.177-4.773-1.768-6.717-.53-1.945 1.237-7.778-3.713-7.778-3.713s-2.652.177-2.652-1.237c0-1.415-.707-1.591.177-2.829.884-1.237.884-1.414.884-2.828s.353-1.768.353-3.182.884-1.945-.353-2.475c-1.238-.53-2.298-.884-2.475-2.121-.177-1.238-.177-1.415-1.06-1.415-.885 0 0 .177-1.415.177-1.414 0-2.475 1.06-3.712-.53-1.238-1.591-1.414-1.591-3.713-1.591-2.298 0-7.247 3.359-3.358 0s4.596-3.536 4.596-3.536-4.066 0-4.243-1.414c-.177-1.414-.53-3.712-1.414-4.066-.884-.353-1.945-.884-1.591-2.121.354-1.237 1.06-5.657 4.596-5.48 3.536.177 4.243 1.59 5.303 2.121 1.061.53 3.006-1.414 3.36.354.353 1.768 0 4.773 0 4.773s1.237.884 1.59 2.651l1.723 1.279z"
        className="land oceania"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "new_guinea").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12867)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "new_guinea").owner ? `#new_guinea_${phase}_modal` : null}
      />
      <path
        id="alaska"
        d="M254.5 242.25c-.625-1.25-.5.125-.875-2s-1.125-1.875-1.75-2.5-1.5-.75-1.125-1.875.625-1.125.25-2.25-2-1.75-2.5-2.875-.5-.25-.5-2 .5-2-1-2.5-2.5.75-3.25-.875-.625-.75-2.125-1-2.125-.125-2.625-1.125-.75-1.875-1.75-1.875-2.25-.375-2.5-1-1.625-2.375-2.5-2.375-.625.625-2 1.25 2.5 1.25-.5 2-4.375 1-5 .5-2.875 1.125-2.5-.75.5-1.625 1.125-2.125 2.375-.625 1.625-1.125-.375-1.375-3-.75-3.375.875-4.25 1.5-.875 1.875-1.25 2.625 1.125.5-1.75 1.75-1.375-.625-4.375 2-2 2.875-4.25 3.25-.875 0-2.625 1.875-1.5 2.75-3.25 2.75-1.125 3.125-2.75 1-2.75-1.25-1.5-2.25 1.5-.75 2.5-1 .5.375 1.625-1.25.875-2.25 2.625-2.375 1.5 1.5 2.25-.875 0-2.25 1.375-3.5 2.875-2.5 1.125-2.625-1.875-.5-3.5.25-1.75 1.125-3.25.875-1.875-.375-1.875-1-.625-2.625-.625-2.625 1.25-.625-.875-1.125-2.25 1.125-2.125-.5 1.125-1.375.25-2.125-1.125-1.25-2.25-.75-2.375 1.75-1.625-.125 2.25-2.625 2.75-3.375 1.25-2.875 1.5-4-1-.5.5-1.625.875-1.375 2.75-1.25 1.375 0 2.625.625 1.625 1 2.375.625 1.5-1.25 2-1.875 1.125-1 1.25-1.75.75-1.5-.625-1-.875.5-2.75.875-1.625 1.75-2.375.125-.875-2.375-.875-2.375-.75 0-.625-1.75-1.125-4.625 2.25-5.5 5.5-.125 5.625.375-1 1 .5 1.125 1.625.5 2.5-.75 1.875-1.125.875-1.625-1.875-.375-2.375-1.375 0-1.25-.5-2.625-.5-1.625-1.25-2.625-2.75-2.5-.25-3.125 5.125-1.25 4.632-.895c0 0 2.828-3.182 4.596-2.828 1.768.353 3.89 0 5.657-1.415 1.768-1.414 4.596-.707 4.596-.707l2.122 1.768s2.828 2.828 4.596 1.768c1.768-1.06 1.768 1.768 4.95 2.121 3.182.354 4.596 1.06 7.778 2.121 0 0 .884-.353.707.884-.177 1.238-1.945 30.583-1.414 30.936l.152.245 7.5.875s.125.125.625 1.625.875 2.5 2 4.5.125 8 .125 8l2 2.75s1.625.75 2.25.875.375 3.25.25 4.5-1.625.625-2.5.875-1.125 2.375-1.25 3.625-2.372.752-2.372.752z"
        className="land north-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "alaska").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12871)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "alaska").owner ? `#alaska_${phase}_modal` : null}
      />
      <path
        id="ontario"
        d="M333.047 219.639c-.707 2.475-1.06 9.192-1.06 9.192l1.767 1.414s1.415 2.475 3.182 4.243c1.768 1.768 2.829 5.303 5.657 4.596 2.829-.707 3.89 2.475 3.89 2.475l2.12-1.414s2.122-1.238 2.476-.53c.353.707 2.474 1.414 2.474 1.414s2.122-1.238 4.066-1.415c1.945-.176.354 1.591.354 1.591l-4.066 1.945s.884 2.652 1.944 2.298c1.061-.353 1.591 4.066.354 4.95-1.237.884.354 2.651.354 2.651l.707 2.475 1.944 1.415.53 2.298h-.176c-.707 1.944-1.06 18.915-1.06 18.915s1.06-1.414 1.767-1.591c.707-.177 1.768 1.414 2.475 1.59.707.178.353-1.413 1.06-2.12.708-.708.884 0 1.591.53.708.53.53 0 1.591-.177s1.061 2.828 1.061 3.712c0 .884-1.768 1.415-1.768 1.415s-2.475.883-3.535.707c-1.06-.177-2.298 1.414-3.005 2.298-.708.884-2.122.353-3.006.707-.884.353-.353 1.237-.176 2.475.176 1.237-3.89 4.42-4.773 3.535-.884-.884-2.298-2.298-3.89-3.182-1.59-.884.354-2.651 1.061-3.889.707-1.237.177-4.066-.884-6.894-1.06-2.829-1.237-3.89-1.767-4.596-.53-.707-1.768-2.652-2.299-4.95-.53-2.298-2.828 1.59-5.303.884-2.475-.707-5.833 1.06-5.833 1.06s.353-4.95-.354-5.303c-.707-.353-19.799.354-19.799.354v-2.829c0-2.298 3.89-45.431 3.89-45.431l18.384.53-1.945 2.652z"
        className="land north-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "ontario").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12875)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "ontario").owner ? `#ontario_${phase}_modal` : null}
      />
      <path
        id="northwest_territory"
        d="M334.836 217.07c.707-2.476 8.818-10.16 8.818-10.16s3.182-.353 4.596-1.413c1.414-1.061-1.768-4.243-1.768-4.243l.707-2.121 2.122 1.767s.707 1.415 2.828 1.415 1.414-2.122 2.829-2.475c1.414-.354 2.828-3.89 2.828-3.89s2.828 1.061 5.657-1.767c2.828-2.829.707-1.414 0-2.829-.707-1.414.707-2.474.707-2.474l-2.121-.708s1.414-1.06 0-3.182c-1.415-2.12-1.768 1.061-3.182 2.122-1.415 1.06-1.061 2.121-4.95 1.414-3.89-.707 0-2.121-.354-3.536-.353-1.414-4.242.708-4.95-1.414-.706-2.121-1.767 1.06-1.414-1.06.354-2.122-.353-5.304-1.767-6.01-1.415-.708 2.828-7.425 2.828-7.425s2.829 1.414 3.182-1.061c.354-2.475 1.768-2.121 1.768-3.536 0-1.414-3.536-.353-3.536-.353l-.707 2.828s-4.242-3.182-4.242 0-1.415 3.182-3.536 7.425-.354 6.717-.354 6.717 2.122.707 1.415 2.829c-.707 2.121-4.95 1.768-4.95 1.768l-.354-3.89h-2.828s-.354 3.89 0 5.304c.354 1.414-7.778.353-9.9-1.414-2.12-1.768-4.596 1.414-6.717 2.474-2.121 1.061-3.89.354-6.01-.353-2.122-.707-1.061 2.828-5.657 2.475-4.597-.354-2.122-6.364-3.182-4.243-1.061 2.121-5.657-1.768-8.132-3.889-2.475-2.121-7.071-1.414-7.071-1.414l-.354-2.475h-2.475l-3.182.707s-2.474 1.06-4.596.707c-2.121-.353-1.767 1.768-1.767 1.768s-2.475 1.06-5.657.707c-3.182-.354-2.829 1.06-4.243 2.121-1.414 1.061-6.364-1.414-9.546-2.828-3.182-1.414-5.26 1.54-8.442.478 0 0-1.677 31.317-1.427 32.067s82.625 3 86.75 2.875 2.336.194 2.336.194z"
        className="land north-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "northwest_territory").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12879)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "northwest_territory").owner ? `#northwest_territory_${phase}_modal` : null}
      />
      <path
        id="venezuela"
        d="M317.375 414.875c1.875-1.25 1.5-3.75 1.5-4.5v-3.125c0-1-.125-1.75 1-3s1.75-2.375 1.75-2.375l1.25-1.125v-2l.75-2.25s.5-1.125.625-1.625-.25-2.5-.25-2.5l.25-1.625 3.125-.875s.375.375 1.375 0 2-1.25 2-1.25l2.25-1.25s1.5-1 2-1.5 2.25-1.125 2.25-1.125.875-.25 1.5-.25 2.75-.625 2.75-.625.125-.625.875-1.125 1.25-1.125 1.875-1.25 4-.625 4-.625 1.25.875 1.375 2.125-.375 2 .625 1.875 2-.375 2.5-.625.25-1.375 1.5-.5 1.375 1.125 1.875 1.125S358 384.5 358 384.5l5.5 1.875 1.875-.375c.625-.125 3.75-.375 3.75-.375s1.375.375 1.875.875 3.625 2.375 4.625 3.875 2.5 2 2.75 2.625 1.25 1.25 1.75 1.25.5 1 1.125 1.125 2 .125 2 .125.125.5.625 1.125 1.625-.625 1.875.75-.125 2.125.625 2.125 1.5-.5 1.5-.5l1.25-.5s0-1 1 0 1.75.75 2.625 1-.375.875 1.75 1.375 4.125.75 4.625.75.5-2 2.25-.375 3 2.375 3 2.375-4.33 3.574-4.86 4.634c-.53 1.061-.884 3.36-2.121 3.536-1.237.177-8.662.53-8.662.53s.354 2.122-.707 2.122c-1.06 0-11.49-.354-11.49-.354l-1.415-4.243s-1.237.884-1.414-.883c-.177-1.768-.177-4.597-.177-4.597s-2.651 1.415-4.242 1.945c-1.591.53-3.006 3.182-4.42 2.652-1.414-.53-2.121-2.299-2.475-.884-.353 1.414.177 5.656-.884 6.01-1.06.354-1.414-.265-2.298.796-.884 1.06-3.27 1.325-3.977.707-.707-.62-1.238-1.326-2.033-1.591-.796-.265-1.238-.707-2.121-.796-.884-.088-1.061-.53-1.768.265-.707.796-2.21 2.122-2.475 2.829-.265.707-1.68 3.27-1.326 4.242.354.973 1.768.708 1.768 2.475 0 1.768-.53 2.652-1.503 2.917-.972.265-5.833 1.856-5.833 1.856s-.796-2.121-1.326-2.651c-.53-.53-1.503-.796-2.21-.973-.707-.176-1.856-1.414-2.74-1.325-.884.088-3.182.088-3.8-.62a4.611 4.611 0 0 0-3.271-1.59c-1.591-.089-2.298 1.06-3.359-.619-1.06-1.68-3.005-3.977-3.535-4.066-.53-.088-3.006-.353-2.326-1.074z"
        className="land south-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "venezuela").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12883)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "venezuela").owner ? `#venezuela_${phase}_modal` : null}
      />
      <path
        id="madagascar"
        d="M659.75 534c.25 1 1 .75 1 3s.5 5.5-1 3.5-1.5-2.75-1.5-1.5.25 3.5.25 3.5 1.23 1.7-.36 1.7c-1.591 0-1.768-.176-1.768.531 0 .707.177 2.121.177 2.121l-1.061 1.061-.53 2.298s1.767.177.707 1.945c-1.06 1.767-1.414 2.298-1.414 2.298s.176-1.591-.177 1.944c-.354 3.536-.354 4.066-.354 4.066s1.06-.353-.353 1.414c-1.415 1.768-1.945 2.298-2.298 3.182-.354.884.353 1.768-.708 2.652-1.06.884-1.59 1.591-1.59 1.591l-1.061 1.06s-.354 1.415-.354 2.122c0 .707-.53 1.237-.53 1.237s-.53.53-.53 1.238c0 .707.176 1.06-.708 1.768-.883.707-.53.884-1.59 1.767-1.061.884-1.415-.353-1.415 1.591 0 1.945-.53 2.829-1.414 2.829-.884 0-9.37.177-10.783 0-1.415-.177.884-7.248-1.061-8.485-1.945-1.238-3.182-5.48-1.945-6.364 1.238-.884.53 0 1.415-.884.884-.884.884-.884 1.414-1.945.53-1.06 1.414-1.06 1.414-1.06s-1.06-2.299-.353-2.299c.707 0 .353-2.651.353-2.651s.354-1.238.884-2.122c.53-.883-.53-1.767.884-1.944 1.414-.177 2.121.177 2.121-.707 0-.884-.884-1.06-1.59-1.238-.708-.176-1.061 0-1.061-1.237 0-1.238-.53-.707-.884-1.945-.354-1.237-1.415-.53-.177-2.121 1.237-1.591 1.237-.53 1.59-2.121.354-1.591-1.06-2.652.708-2.652s2.298.53 4.066-.177c1.768-.707-.177-.884 2.652-.707 2.828.177 3.005 1.06 4.065 0 1.061-1.06 1.591-.707 1.768-1.944.177-1.238 0-1.591 1.238-2.122 1.237-.53 1.237 0 2.12-.707.885-.707 1.592-1.59 1.415-2.651-.177-1.061-1.06-1.591.53-1.591 1.591 0 1.415.53 2.122-.354.707-.884.53-.884.884-2.475.353-1.59 0-1.944.884-2.475.883-.53 2.474-2.298 2.474-2.298s.53-1.59 1.238.884c.707 2.475 0 2.121.884 2.828.884.708 1.06.177 1.06 1.061 0 .884-.353 2.652-.353 2.652l-1.395.936z"
        className="land africa"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "madagascar").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12887)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "madagascar").owner ? `#madagascar_${phase}_modal` : null}
      />
      <path
        id="north_africa"
        d="M544.625 385.375c-.875-1-1-1.375-1.375-2.125s-.625-2.125-1.875-2.25-1.125 1.125-1.5-.75-.75-3.375-1.25-3.75-1.375-.75-2.5-1.875-1.25-2.25-1.25-2.25L532.75 371s-5.5.25-6.125.25-1.75.125-2.5.625-.375.75-1.75 1.375-3.625 1.75-4.25 2-3.5.375-3.5.375 0 1-1.125 1.75-2.625 1.625-3.875 1.5-1.394-.569-2.375-.375c-1.848.365-3.059 1.582-3.75 1.5-.633-.075-1.75.375-2.875.75s.125.5-2.25.5-3.625 0-4.375-.125-1.375.25-2 .375-1.5.25-1.268.42c-1.414 0-2.121 1.06-2.121 1.06l.353 4.597-3.182 3.535s-.707 2.829-1.414 4.95-1.768 4.242-1.768 4.242l-1.414 3.89s-1.561.806-1.436 1.431.375 1.875-.125 2.25-1.125 0-1.75 1.25-1.125 2.375-1.125 2.875.625 1-.25 2-1.75 1.125-2 3.25-1.25 4-.25 5.25 1.625 2.25 1.625 3.625-.375 1.25-.25 3.25.375 1.875.375 3.25-.125 3.25-.375 4.875-.75 2.125-1.125 4-2.625 2.625-.875 4.25 1.5 3.125 2 4.5 5 1 5 3.875 3.375 3.25 3.625 4.75-.625 3.625 2.375 4.875 2.75 3.125 3.375 3.625 3.375.875 4 1.625 1.5 2 2.125 2.625 1.25 1.625 3.375 1.5 2.375 0 5.75-.375 5.75-.5 6.625-.625 2.75.5 4.125-.125 1.125-1.75 2.875-2.125 2.375 0 3.5-.25 5.5-.25 6.125.25 1.375 0 2.125 1.625-1.5 4.125 3.25 3.875 7.5-1 8.125.125-1.5 2.75-1.125 4.25.875 1.875.375 2.625l.57.307c.53 1.061.53 1.591 1.238 1.945.707.354 2.652-1.237 2.652-1.237s1.59 0 3.182.353c1.59.354 1.767-.353 3.358-.707 1.591-.354 1.945 1.237 1.945 1.237s1.237.884 2.652 0c1.414-.883 1.06-1.237.53-2.651-.53-1.414.353-1.768.707-5.657.354-3.89-1.237-1.945-1.237-1.945s-.53-1.237-.354-3.712c.177-2.475.884-.707 1.414-1.768.53-1.06 1.238-1.06 2.122-1.767.883-.708 2.12-.708 3.005-1.238.884-.53 1.414-1.59 2.828-2.121 1.414-.53 2.829-1.238 5.127-2.298 2.298-1.061 1.767-2.122 1.767-3.006 0-.883 2.299-3.358 2.299-3.358s-.53-2.122-1.415-3.36c-.884-1.236-.353-2.65-.353-3.535 0-.883.353-1.414.884-2.12.53-.708.176-1.062.176-1.062l.884-1.767s.53-1.415.53-2.652-.706-.707-1.414-.884c-.707-.177-.176-.353.884-.884 1.061-.53.707-1.768.884-2.828.177-1.06-.353-5.48-.53-6.364-.177-.884-3.89.177-4.773-.177-.884-.353-1.414-1.06-1.414-1.06s-.707-2.122-.884-3.183c-.177-1.06-2.652.177-3.536 0-.884-.176-.176-1.414-.53-2.651-.354-1.238-1.768-.707-2.652-.707-.884 0-2.298-.707-3.535-1.591-1.238-.884-1.591.353-3.005.53-1.415.177-1.415-.177-1.945-1.06-.53-.885-2.298.53-3.889.353-1.591-.177-1.237-.884-2.121-2.298-.884-1.414-1.768-.354-3.713-.884-1.944-.53-1.237-.707-1.414-2.121-.177-1.415-1.414-1.238-1.414-1.238s-.177-1.59-.354-2.828c-.176-1.238.177-3.182.177-3.89 0-.706-.353-3.358-1.59-3.888-1.238-.53-.354-1.768-.354-1.768s-.53-1.768-.354-2.652c.177-.884 1.414-1.944 2.298-1.944.884 0 1.414-1.061 1.414-1.061s-1.414-2.121-2.121-3.359c-.707-1.237 1.237-1.06 1.237-1.06l.884-1.061s.354-.53 1.945-1.414c1.59-.884.683-2.909.683-2.909z"
        className="land africa"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "north_africa").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12891)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "north_africa").owner ? `#north_africa_${phase}_modal` : null}
      />
      <path
        id="greenland"
        d="M429.125 209.875s.625 3.875-.25 5.5-1 .75-1.5 3.125-.125 3.25-1 4.625-.625-.875-1 2.75-.125 4.5-1 4.875.25 1.75-1.25 1.75-2 1-2.375-.375.25-2-1.25-2.125-2.375 1.625-2.625-.125.375-2.375-.875-2.875 1.25 3.625-2.875-1.25-3.375-8.25-3.375-8.25-1.25-1.375-1.25-2.25.875-3.625-.25-5.125-2.25-4.5-.875-5.375 2.75-.625 3.125-2.625.25-1.75.5-2.75.75-1.375-.25-1.5 0 .375-1.875-.125-1.625-1.25-2.125-1.375.375.75-1.25.125-2.875-1.125-1.125-1.75 2.875-.875 3.625-.625 1.125 1.625.875-.25S404.5 191 404.5 189.75v-2.25c0-1.25-.25-1.875-1.25-2.875s-.75-1-1-2.625-.25-1.5-1.125-2.5-1 .375-1.625-1.375-.625-2.125-1.875-2.125-1.125.75-2.125-.625-.75-1.625-2.375-1.5-2.875.875-3.125 1.375.375 1-1.25 1.125-2 .125-2.875.125-1.75.375-1.75-.125c0 0-1-1.5-2.625-1.125s-2 1.5-2.5.25-1.5-1.125-1.625-1.75-1.625.125-.125-1.5.5-2 2.375-1.875 1.5.25 2.5-.25 2.375-.625 1-.75c0 0 .5-.75-.875-1s-2.875.5-2.875-.5-1.25-2.125.5-2.125 2.75.5 3.625-.375.875-.625 2.125-.5 2.5.75 2.875-.25 2.375-1.125.75-1.625-2.5-.375-2.125-1.125 1.375-.875 1-1.75-2.125-1.625.375-1.75 3.75 1 4.125-.375-1-2.5 1.25-2.5 4.625-1.125 4.75-1.875-.5-1.625 1.625-1.125 1.75 1.625 2.875.25-.125-1.75 2.125-1.25 2.5.75 3.375.125-.75-.875 1.375-.625 1.75 1 2.125-.875-1.375-1.625.75-2.125 2.25 0 3.25-1.375.125-1 2-1.375 2.125 0 1.25-1.375-2.5-2.125 0-2.375 3.875-.5 4.125-1.25c0 0-.125 1 1.375.625s1.25-.875 2.125-2 .625-1.375 1.5-.75-.125 1.125 2.125 0 .5-1.125 2.75-.75 2.125.125 4.75.25 1.25.5 2.75.875 1.125.25 3 .25 1.5-.375 2.625.375.625.875 2.875.875 2.875-.625 3.25.75-.625 1.5 2.125 1.875 3.625-.125 2.125 1-4.625 1.25-3.75 2 .75.5-1.625 1-5.875 1-3 1.375 4.875-.875 5.625.375-1 1.375 2.25 1 1.875-1.125 4.5-.625 2.125 1.25 3-.375-1.5-2.5 1.375-1.875 2.25.625 4-.375 2-3 2.75-.625.625 2.875-1 3.625-1.5-.375-2 1.375-.375 2.25-1.625 3.25-1.875.125-1.625 1.875.25 1.5-.125 3.25-1.25 2.25-.125 3.25 1.125 0 1.875 1.5 1.125 1.5.375 3.25-.875.875-1.125 3-.5 3.375.375 2.75 1-2.375 1.125-.625.625 2.875-.875 3.5-1.375-.25-1.625 1 .625 1.625-.5 2.625-.125 2-1.375.875-2-2.875-3-1.75-2.375.125-1.25 1.5 1.875 1 2.125 1.5.125 1 .5 1.75.125 1.125 1.125 1 1.375.375 1.125 1.25-.375 1.375.375 2.25 1 .875.375 1.25-.75.5-1.625 1-.75 1.25-1.25 1.375-1.5.75-1.625-.5-.25-2.875-1-3.5-1.875-2.25-2.125-.75 0 2-.375 2.75-1.875-.25-.375 1 2.125 1.625 2.125 1.625 1.375.75.75 1.375.125.875-1.75 1.125-1-1.625-2.75.375-3 2.5-3 2.5l-.875-1s-.75-2.125-1-.75 0 1.25-1 3.375-.5 2.625-1.625 2.75-2-.75-2.625.125.25.625-.875 1.5-1.5 1-2.25 1 .375-2.125-1.125.125-.625 2.5-1.875 2.75-1.5.25-2.625.25-1.75.125-2.875.125-2 .125-2.75.5-1.5 1.25-1.5 1.25v.75z"
        className="land north-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "greenland").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          markerStart: "none",
          markerMid: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12895)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "greenland").owner ? `#greenland_${phase}_modal` : null}
      />
      <path
        id="iceland"
        d="M474 212.5s2 1.875 2.5.875-.625-2.25.875-1.125 1.375.75 1.875 1.375 3.5-1.5 2.375.5-1.875 2.75-1.125 2.625-.125-.75.875.5.875 2.25 2.25 1.125l1.25-3.875s3.5.125 3.25 1.375-1.125 1.125.75.125.875-2.75 2.125-1.625 1.875 2.25 2.375 1.125-1.125-2.375.375-2.125 1.625 1.625 2.5 0-.125-2.5 1.25-2.25.75.625 1.75-.25.75-1.75 1.75-.875 1 1.25 1 1.25 2 .25 2.5.5-.25-1 .25 1 .625 2.625 1.25 2.375 1-1.125 1 .5-1.125 2.125.375 1.875 1.875-.375 2 .75.75 2 .75 2 .125.875 0 1.375-.375.75-.125 1.375.5 1.625 0 1.875-1.25.75-2.125.875-1.375.75-1.625 1.375.75.25-.375 1.625-.75 1.625-1.5 1.875-1.625.75-1.625.75l-3.375.5-.75-1.375s-.5-1.125-1-.625.125 1.5-.375 1.625-1.75-2.125-1.75-1.125.625 2.75.625 2.75.125 1.5-.5 1.75-.625 1-2.25 1.125-1.75.875-2.625 1-1.125 1.875-2.75.625-6.125-3.25-7-3-1.25.625-3 .125-2.5.625-2.875-.125-.5.375-.125-1.375 2-2.625 2-2.625.625-.375.5-1 0-.875-.75-1-.5-.5-.875-1.5-.75-.875-1.75-.625-1.25 1.375-2.375.125-1.625-1-1.125-1.75.375-1 1.625-1.25 1.375 1 1.875-.5 1-2.125 1-2.125-.5-.25-1.375-.125-.625 1.125-1.625-.875-2.125-2-2.125-2-.25 0 .375-1 1.25-1 1.875-2-.5-1.875.375-2.75 1.125-.25 1.125-.25l.25.5z"
        className="land europe"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          opacity: 1,
          fill: getRegionObject(maps, "iceland").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          markerStart: "none",
          markerMid: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12899)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "iceland").owner ? `#iceland_${phase}_modal` : null}
      />
      <path
        id="great_britain"
        d="M466.514 294.238s-.354.53-1.768.53c-1.414 0-1.591-.176-2.475.354-.884.53-1.944.707-2.828.884-.884.177-1.945 1.238-1.945 1.238s0 .707-1.237 1.06c-1.238.354-1.061.177-2.298.177-1.238 0-.884-1.06-1.061-1.768 0 0-4.152.412-2.902-.338s2.25-.25 1.375-.875-2.25-.75-.75-1 1.875 0 1.875-.5-1 .625 0-1 1.25-1.625 1.875-2.125.25-2 1.125-1.75 1.875.5 1.875.5l.5-1s-3.125-.125-3.375-.625c0 0-1.625-1.125-2.125-1.125s-1.625.125-1.25-.375 1.125-2 1.125-2-1.625-1.25-1-1.75.75-.375.75-1.25-1.125-1 .125-2.25 1.5-1 2.375-1.75.875-.875 1.5-.25.625 1.625 1.75.25 1.25-2.125 1.25-2.125-.5.125 1.375-.875.375-1.875 3.125-1.5 2.25.5 2.875.375 1-1.75 1.375-.375-.5 1.625 1.25 2.125 2.5.25 2 1.125-.625.75-.125 1.5.875 1.125.875 1.75-.375 1.125-1.25 1.5-.75-.125-1.875 1-1.75.875-1.75.875-.25-.625-1-.125-.375 1.25-1.5.5-2.5-.75-2.5-.75-.5 0-.375.75.75 3.25.75 3.25 1.125 2 .75 2.875-2.25 1.375-.625 1.5 1.5-.25 1.5.875 0 1.75 1 1.625 1.75 1 1.639.863zm12.197-10.96c-.53-.618-.265-.53-.442-1.149-.176-.618.089-.707.089-1.326 0-.618.088-.883.353-1.679.265-.795-1.414-1.503-1.414-2.121 0-.619-1.06-1.414-1.237-1.768-.177-.354-.707-.796-1.326-.707-.619.088-.619.442-1.326.795-.707.354-.707-.176-1.237-.618-.53-.442-.442-.973-.442-1.945 0-.972.088-.53.442-.972.353-.442.442-.354.972-.972.53-.62.265-.442.265-1.061s0-1.15-.265-1.856c-.265-.707-.972-.177-1.238-.884-.265-.707-.353-.53-.795-.796-.442-.265-.619-.088-1.591-.176-.972-.089-.265-.62-.354-.973-.088-.353-.088-.53-.265-1.502-.177-.973-.619-.265-1.149-.177-.53.088-.707.088-.884-.796-.177-.883 0-.53-.088-.972-.089-.442-.177-.442-.796-1.414-.618-.972.089-.442.796-.972.707-.53.619-.796 1.237-1.238.619-.442 0-.618-.176-1.326-.177-.707-.53-.883-.53-.883s-.62.176-1.68.176-.972-.176-1.503-.884c-.53-.707.089-.707.884-1.325.796-.62.53-.973 1.326-1.857.795-.883 1.237-.795 2.21-.972.972-.177.53-.707.972-1.768.442-1.06.619-1.237.884-1.856.265-.618.795-1.414.972-2.563.177-1.15 1.625.759 4.625-.241s3 0 3 0 1.5 2.5-1 3.5-1 5-1 5l.739.05s.884-.708 1.591-.796c.707-.088.619.354 1.503.354.883 0 .707-.53 1.767-1.238 1.061-.707.796.796.796 1.414 0 .619 1.414 2.387 1.414 2.387l-.353.619s-.62.353-.62 1.325c0 .973-.264.707-.441 1.15-.177.441-.53.441-.972.707-.442.265.088.441.265 1.325.177.884-.089.442-.53.53-.442.089-.884.089-1.238.708-.354.618-.088.707-.619 1.414-.53.707-.442.442-1.59.795-1.15.354-.62.354-.354 1.68.265 1.326 1.149-.442 2.74-.619 1.59-.177 1.237 0 2.298 0 1.06 0 .619.089 1.326.619.707.53.176.795.53 1.414.354.619.707.265 1.15.884.441.619 0 1.237 0 2.121v.796s1.06 3.182 2.474 3.977c1.414.796.884.796 1.503 1.326.618.53 1.767 3.447 2.12 3.89.354.441.354.795.531 2.386.177 1.59 0 1.237-.177 1.856-.176.619-.265.53-.53 1.502-.265.973 0 1.15 0 1.503 0 .354.53.619 2.298-.265s1.06-.619 2.21-.972c1.149-.354.884-.442 1.944-.177 1.061.265.884.442 1.857 1.414.972.972.353 1.149.618 1.856.265.707-.088.619-.353 1.326-.265.707-.265.619-.707 1.503-.442.883-.177.707-.53 1.237-.354.53-.62.265-1.68.53-1.06.266-.884.884-1.414 1.415-.53.53-.354.707-.442 1.149-.089.442.442 1.237.442 1.237s.795.354 1.237.796c.442.441.265.795-.265 1.679s-.707.442-1.768.884c-1.06.442-1.414 0-2.475-.089-1.06-.088-.972.354-2.475.884-1.502.53-1.414.089-2.563 0-1.149-.088-1.06-.088-2.21 0-1.149.089-1.06.442-2.386 1.238-1.326.795-.795 0-1.237-.354-.442-.353-.707-.442-1.326-1.06-.619-.62-.619-.354-1.15-.177-.53.177-1.679 2.21-2.474 2.563-.796.354-.884.177-2.033.177-1.15 0-.796 0-1.326.088-.53.089-.884.972-1.59 1.768-.708.795-.531.265-1.857.442s-1.237-.089-1.414-.442c-.177-.354.177-.354.618-.972.442-.62 1.238-1.768 1.768-2.652.53-.884.796-.442 2.122-1.237 1.325-.796.265-.354.883-1.68.62-1.326.708-1.326 2.033-1.768 0 0 .572-1.17-.553-1.795s-1.625-.375-2.75-.875-2-.25-1.75-.938c1.125-1.312 1.375-1.937 1.75-2.562.375-.625.125-1.25.625-1.25s.75.25 1.375-.125.75-.625.75-1.375-.125-1 .125-1.75 1-1.375.375-1.875-.125-.375-.875-.625-1.25-.75-1.25-.75l.25-1 .188-1.75s.187.125 1.437.625 2 2.125 2 2.125c.266.472.651.46.336-.222z"
        className="land europe"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          letterSpacing: "normal",
          wordSpacing: "normal",
          textAnchor: "start",
          opacity: 1,
          fill: getRegionObject(maps, "great_britain").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          markerStart: "none",
          markerMid: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12903)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "great_britain").owner ? `#great_britain_${phase}_modal` : null}
      />
      <path
        id="scandinavia"
        d="M579.125 237c-.625-.125-1.5-.5-1.875-1.25s-1.25-1.625-1.875-1.375-.375.375-1.625.375-1.875-1.75-2.875-1.125-.25 1-1.5 1.25-2.625.375-3.875.375-1-.25-2.375 0-2.375 1-2.875-.25-.625-.875-.625-2.125.75-2.125 1-3.25-.5-2.25.375-3.375 1.5-1.375 1.875-2 .75-1.375.875-2.25.125-.625.125-1.5-.375-1.625-.875-2-.375-.375-1.5-.5-.75-.875-1.875.375-2.125 1.375-2.25 2.375.5 1.375-.125 2.625-.75 1.125-1 1.625.25 1.25-.25 1.75-.875.5-1.75 1-1.5.125-1.625 1.625-.375 1.125 0 2.125.625 1.125.875 1.875.75 1.125.75 2.625.375 2 .375 2 .5 1.75.375 2.625-.5 2.375-.875 3.25-.75 1.375-1.375 2-.375.75-1.125 1.5-1.625 1-2.25 1.375-.75 1.625-.75 1.625v2.375s.625 1.625-.5 2.125-1.375.625-2.125 1.75 0 2-.875 2.75-.625.875-2.125.75-1.75-.125-2.25-.75-1.125-1.75-1.875-1.875-.625.125-1.125-.125-.125-.75-.875-.75-1.125.5-1.125 0v-1.375-4.625l-1.875-2.875.625-1.625-.75-1.25-.875-.5s-1.375.5-1.5 1-.125.875-.375 1.375-1.375 2-2.25 2.125-2 .25-2 .25-.375 1-1.125.625-.5-.25-1.375-1.25-1.125-2.125-1.125-2.625.25-.625-.375-1.125-.625-.5-1.25-1.125-1.5-1.125-1.375-2.25.375-2.25.625-3.375-.375-2.25-.375-2.25l-.475-.909c-.53-1.06 0-.883-.884-1.767-.884-.884-1.59-1.238-1.06-2.652.53-1.414-.354-2.298 1.06-2.652 1.415-.353 1.238 1.591 1.591-.883.354-2.475-.707-1.768.707-3.36 1.415-1.59 1.591-1.944 1.591-1.944s.884 0 1.238 1.238c.353 1.237.353 2.298 1.06 1.414.708-.884.884-1.945 1.415-2.652.53-.707 1.414-1.59 1.414-1.59s-1.591-2.652.354-2.476c1.944.177 1.944.53 2.474-.176.53-.708.354-.708 1.591-1.061 1.238-.354 1.415-.177 1.591-1.238.177-1.06.707-1.06 1.415-1.767.707-.707.707-1.06.883-2.475.177-1.414-.176-1.238 1.415-3.359 1.59-2.121 1.59-1.944 2.121-3.359.53-1.414.53-1.237 1.06-2.121.531-.884 1.238-.53 1.768-1.237.53-.708.708-1.591.708-1.591l.883-1.591s-1.767-.708-.176-1.415c1.59-.707 1.767-.883 3.005-1.237 1.237-.354 2.121-.354 2.121-.354s1.15 1.68 1.326.442c.177-1.237-.53-1.414.53-2.21 1.061-.795 1.68-.706 2.033-.441.354.265.177.53.973.353.795-.177 1.679.884 1.944-.353.265-1.238-1.149-2.21.53-2.917 1.68-.707 2.564-.089 3.094-.619.53-.53-.265-.795.796-1.326 1.06-.53 1.414-.265 2.474-.618 1.061-.354 1.15-1.503 1.68-1.591.53-.089 1.237 0 1.768.53.53.53-.973.972 1.149.619 2.12-.354 4.95-1.68 5.745-1.061.795.619.088 1.68 1.149 1.68 1.06 0 2.121-.443 2.652-.089.53.354.441.619 1.237.972 0 0 .925 3.968.3 4.468s.75 3.625 0 4.125-1.125 6.25-1.125 8.875 1.375 6.75 1 8.875.625 5.125.625 5.125.625.625.625 2.25.875 2.5.875 2.5.438.125.5.688c.063.562.063 1.437-.188 1.687-.25.25-.812.688-.812 1.625 0 .938.25 1.313-.063 1.75-.312.438-.562.563-.687 1.625-.125 1.063-.313 2.5-.063 3.063.25.562.688 2.687-.187 2.437z"
        className="land europe"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "scandinavia").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12907)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "scandinavia").owner ? `#scandinavia_${phase}_modal` : null}
      />
      <path
        id="japan"
        d="M829.436 335.25c0-1.237.53-4.419-.177-4.596-.707-.176-.707-.707-1.944-.53-1.238.177-2.652-.53-2.652-.53s-.353-1.238 1.768-2.475c2.121-1.238 3.359-1.945 3.359-1.945l-1.06-.707s-2.299-.177-1.238-.884c1.06-.707 1.237-1.59 2.121-2.651.884-1.06 3.005-6.541 4.243-8.662 1.237-2.122 4.066-1.415 4.066-1.415l1.944-4.95s-1.59-3.712 1.06-4.949c2.652-1.237 2.83.177 3.536-2.828.707-3.006 2.829-2.475 3.182-3.536.354-1.06.707-1.06.177-2.828-.53-1.768-1.945-3.36-1.945-3.36s-.707-2.65-.707-4.065c0-1.414-.353-3.712.884-4.243 1.238-.53-1.06-3.358-1.06-3.358s.707-1.061-.177-1.768c-.884-.707-1.414-1.591-1.414-2.475 0-.884.176-3.182.176-3.182s.884-1.414 1.591-1.591c.707-.177 1.415.177 1.415-1.591s-.884-4.42-.884-4.42-3.713-5.48-4.42-5.833c-.707-.354-.707-.707-.176-1.768.53-1.06 4.065 4.243 6.54 4.596 2.475.354 4.773 0 4.773 0l2.298-1.06 4.597.176s1.944.177 2.298 2.122c.353 1.944 2.828 1.237 1.59 3.005-1.237 1.768-1.06 2.652-2.297 2.475-1.238-.177-1.061-1.06-1.945-.884-.884.177-1.591 0-1.591 1.945 0 1.944 1.414 2.12.177 3.712-1.238 1.59-.707 2.298-2.475 2.298-1.768 0-3.359-.177-5.127.177-1.767.353-2.651-.884-2.651.707 0 1.59 0 1.944.884 2.121.883.177 1.59 0 1.237 1.06-.354 1.061-1.414 1.769-.707 2.122.707.354 1.59-.53 1.59.354l3.006.176.53 1.768s.354 0 1.415.177c1.06.177 1.767-.707 2.121.53.354 1.238.884 1.768.884 1.768s.53 0 .707 1.238c.177 1.237.354 1.59.354 2.474 0 .884-.884 3.713-.884 3.713s-.707.707-.53 2.121c.176 1.414.883 0 1.06 1.768.177 1.768.177 2.298.177 3.535 0 1.238-.177 1.061.884 1.945 1.06.884 1.414 1.768 1.414 1.768s.884.53.884 1.767v2.298s-.53.177-1.238.177c-.707 0-1.59-.177-1.59-.177s-.177.53-.531 1.768c-.354 1.238-1.945 1.945-1.945 1.945s0 1.768-.707 1.944c-.707.177-1.237.177-1.944.354-.707.177-1.238 0-1.591.884-.354.884 0 1.06-.884 1.237-.884.177-1.768-1.414-1.945.884-.176 2.298 1.238 3.182-.53 3.712-1.768.53-2.828.884-2.828.884s.353 1.415-.884 1.061c-1.238-.354-2.652-1.591-2.652-2.475 0-.884-.177-1.414-.177-1.414l-2.475 1.59s.354.885-1.414.885c-1.768 0-2.475-1.945-2.121 0 .353 1.944 1.06 3.358 1.237 4.066.177.707 1.238.176 1.061 1.237-.177 1.06.177 1.06-.53 1.768-.707.707-2.122.884-2.829.884-.707 0-.884-.177-2.298 0-1.414.176-2.127 6.829-2.127 6.829l-1.25 1.125h-.689z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "japan").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          markerStart: "none",
          markerMid: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12911)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "japan").owner ? `#japan_${phase}_modal` : null}
      />
      <path
        id="yakutsk"
        d="M810.125 170.375c-.5-1.125.75-1.25-1.125-2.25s-2.625-.75-3.75-1.125-.875-.625-.375-2 2.125-1.5-.125-2-2.125-1.375-3.75-1.375-1.25 0-2.125.375-1 .375-1.375.875.375 1.125-.5.875-.375.125-1.25-.875-.625-1.375-1.75-1.25-.25-.125-1.875.25-2.125.375-3.25.5-3 1.625-3 1.625.125.25-1.25.375-.5-.625-2.375.75-1 1.5-2.5 1.375-.75-1-2.375-.25-1.75.375-1.75 1.375-1 1.625-1 1.625 0-.375-.375-1.625-.875-.75-.75-2-5.25-2-6-3.75-.625-1.5-.875-3.125-3.25-2.375-3.75-2.25-1.875 1.625-2.5 2.375-.875 1.375-1.875 2.125c-.863.85-1.67 1.374-2.438 1.938l.313 2.562c0 .5-.125 2 1 3.125s1.5.625 2 1.125-.125 3.75-.25 4.5-.625.75-1.125 1.625-.125 1.375-.5 2.875-.875.875-1.25 2.375 0 1.375.5 2.375.5 1.875.5 3.375-.25.625-.875.75-1.25.625-2.5.75-2.625.625-3.25-.125-1.25-.875-3.5-.625-.625 1-.875 2-1 .875-2.5 1.125-1 .375-1.125 2 1.75 2.625 2.75 3 1.25.625 1.625 1.25 1.5.375 3 1.75.25 1.625-.75 2.625.625 4.5 1.375 5 1.125 1.25 1.5 4.25 1.5 3.25 1.5 3.25.875.5 1 3.625.875 5.75.875 5.75 4.875-1.5 6.125-2.25 1.125-.875 1.5-2.625.5-4.625 1.875-4.875 1.125 1.75 1.125 1.75c.125.75 1.5.5 3 .75 1.058.176.624-.767.407-1.689-.09-.385-.143-.766-.032-1.061.375-1 12.295.113 12.295.113.442-1.06 1.237-1.768 2.563-3.005 1.326-1.238.265-3.447.354-3.89.088-.441 1.768-1.855 2.563-4.86.796-3.006 1.768-.796 1.768-.796s2.033-1.768 2.74-3.005c.707-1.238 4.596-1.06 5.038-.884.442.177.177 1.944.795 3.182.62 1.237.266.53 1.326.442 1.06-.089 1.768-.442 2.74-.442.973 0 .53 1.414.973 1.59.442.178 2.033 0 2.474-.088.442-.088 1.415-.795 2.033-1.325.62-.53.177-2.298.266-3.094.088-.795.972-1.06 1.237-1.68.265-.618 0-2.297-.088-3.093-.089-.795-.707-1.768-1.326-1.944-.619-.177-3.094-.354-4.066-.442-.972-.089-.972-4.773-.53-7.779.442-3.005.176-2.298.618-2.828.442-.53 1.945-.796 2.475-.796s1.238-1.149 1.326-2.032c.088-.884.796-.708 1.149-1.591.354-.884 1.503-.442 2.74-.62 1.238-.176.442-1.502.442-2.916l-1.28-1.092z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "yakutsk").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12915)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "yakutsk").owner ? `#yakutsk_${phase}_modal` : null}
      />
      <path
        id="kamchatka"
        d="M818.375 289.5c1-.75.75.125 1.625-1.75s.625-2.5 1.25-3.125 2-2.875 1.875-4.5-.625-1.5-.25-3 .5-1.5.75-3.5-.25-1.75.375-4.125.75-2.875.375-3.75-.625-1.875-.625-3.375.125-2.75 0-3.25-.25-1-.625-2.375-1.375-2.375-1.375-2.375-.25 1-.75-.625-.375-1.125-.625-2.125-1 .5-.625-2.875.25-4.5.25-4.5-.125-3.375-2.375-3.375-3 .625-3.25-1.25-1.25-2.25-2.75-2.5-1.75 0-2.5-.375-.375-.625-1.625-.625-.5.5-2.25 0-1.75.75-2-.5-.125-2.125 1.625-4.875 1.625-3.375 1.875-4.75-1.25-.75 1-2.75 1.625-2.625 4.25-2.625 3 0 4.875-.875.375-1.875 2.625-.875 2 2 3.25.875 1.625-1.875 2.25-1.875 3 1.375 3 1.375 1 .5 1.875.25 1.625 1.625 2.5-.125.5-2.25-.375-2.75-1.875 1.75-1.375-1.25 1-4.125.625-5.125-3-4.5.125-2.375 2.375 2.5 3.5 3.125.625.625 1 3 4.125 1.875 3.625 4.875-.5 3.875-.75 5.125-1.625.375-1.25 5.5.75 14.25 5.25 18.25 5.625 4.5 6.25 2.75 1.25-2.5.875-4.5-1.375-2.75-.625-4.125 1.375-2.25 1.5-3.375.375-2 .25-3.25 0-2.75-.25-3.75-.5-2.625-.625-3.625-1.125-2.75-1.5-3.625-1.5-2.625-1.75-3.875-.75-1.75.5-3.5-1.125-2.75 1.75-2.375 2.75.75 4.25.5 3 .625 3.5-1.125.125-1.5 1-2.75 1.25-1 2.25-2.5-.5-2 2-4 4-2.75 4.625-3.5 1.875-1.125.875-2.125-1.125-1.875-2.5-2.75-2.125-1.5-2.75-1.625-1.5-.375-.875-.875 1.625-1.375 2.625-1.375 1 1 2.5.25 2.125-1.25 3.125-.5.375.125 1.125 1.625-.75 1 1.25 2.125 3.875 1.375 4.5 1.375.25.75 1.75-.125 1.25-.5 2.25-1.875 1.625-1.625 1.25-3.375-1-2.875-1-3.375l-1.125-1.875s0-.875-1.75-.875-2.75.125-2.75-.5.5-1.75-.625-1.75-1.75-1-2.5-.125-1.25 1.875-2.125 1.375-1.875-1.75-1.875-1.75.25-1.25-.125-1.75-1.5-1.625-1.5-1.625l-1.625-.75s-3.375-3.375-4.625-3.5-2.375.125-2.75-.875 1.75-1-1.375-1.5-3.25 0-4.25-1.375.375-1.75-2.125-1.875-3.625.25-5.75-.625-2.125-1.75-3.125-.75-.5 1.125-1.875 2.25-.625 2.125-2.75 2.125-1.75.25-3-.25-1-.875-2.5-1-1.125 0-2.625.125-.25 1-2.625-.125-2.375-1.375-4.125-2.25-2.25-1.125-3.125-1.125-4.5-.375-5.5.5c0 0-1.345 1.428-1.345 2.842 0 1.414.796 2.74-.442 2.917-.582.083-1.144.03-1.613.041-.53.013-.94.11-1.127.578-.353.883-1.06.707-1.149 1.59-.088.884-.795 2.034-1.326 2.034-.53 0-2.033.265-2.475.795-.442.53-.176-.177-.618 2.828-.442 3.006-.442 7.69.53 7.779.972.088 3.447.265 4.066.442.619.176 1.237 1.149 1.326 1.944.088.796.353 2.475.088 3.094-.265.618-1.15.884-1.237 1.68-.089.795.353 2.562-.266 3.093-.618.53-1.59 1.237-2.033 1.325-.441.089-2.032.266-2.474.089-.442-.177 0-1.591-.973-1.591-.972 0-1.68.353-2.74.442-1.06.088-.707.795-1.326-.442-.618-1.238-.353-3.005-.795-3.182-.442-.177-4.331-.354-5.038.884-.707 1.237-2.74 3.005-2.74 3.005s-.972-2.21-1.768.795c-.795 3.006-2.475 4.42-2.563 4.862-.089.442.972 2.651-.354 3.889-1.326 1.237-2.121 1.944-2.563 3.005-.442 1.06-.354 2.475-.088 2.917.265.442 1.414 2.917 1.06 4.95-.353 2.033-.884 8.131-.619 9.28.266 1.15.354 3.978 1.15 4.773.795.796 1.149 1.415 1.502 2.122.354.707 3.978 1.856 4.596 3.359.62 1.502.266 1.856 1.326 2.474 1.06.62 2.033 1.945 2.121 3.182.089 1.238.089 3.094.973 2.829.884-.265 1.856-1.503 2.21-1.856.353-.354 1.679-.796 2.828-.354 1.149.442 1.414.442 2.563.265 1.15-.177 2.21.177 2.21.177s.884 1.326.972 2.033c.089.707-.442 1.237 1.15 1.149 1.59-.088 1.944-.177 2.12 1.591.177 1.768 1.15 2.74 1.15 2.74s.265 1.856.176 2.298c-.088.442-.707 1.503-.442 2.652.266 1.149.884 2.298.354 3.093-.53.796-1.414 2.564-1.414 3.27 0 .708-.177 2.564 0 3.183.177.618-.53.176-.265 2.121s.442 2.298.442 3.005c0 .707-3.89.53-2.122 2.652 1.768 2.121 2.121 4.684 4.066 4.596 1.945-.088 2.828 2.74 3.094 3.712.265.973 1.06 1.68 2.298 1.768 1.237.089 1.414 1.945 2.386 2.121.972.177.972.089.783.035z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "kamchatka").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12919)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "kamchatka").owner ? `#kamchatka_${phase}_modal` : null}
      />
      <path
        id="siberia"
        d="M683.875 193.625c.625 1.75 1.125.75 2.25 0s.25-.625.375-2.125-.375-1.25-1-2-.375-.125-2-.125-1.125.25-2.25.375-.75 0-2.625-.375S677.5 188 677.5 187.25s-.5-2.125-.5-2.125-1-.375-1.5-1.375 0-1.125.125-1.625.25-1.125.125-2.625-.5-.5-1-1.25 0-1.25 0-1.25l1-1 1.75.625 1.125.375 2.25.75s.125.25 2.125 2.5 1 .25 2.5.375 1.125-.625 1.125-.625-2-1-2-1.5.5-1.25.5-1.875-.125-2-.375-2.5-1-.875-1.5-1.375-1.25-1.875-1.25-1.875-.375-.75.5-3.25 1.125.875 1.125.875l.75.375 1.5 1.25s1.25-.25 2-.5 1.875 1.75 1.875 1.75 2.25.25 2.75.25 1.5-1.375 1.5-2.375-2-.125-2-.125l-3-.625s-3.875-1.125-4.625-2.125.125-1.5.125-1.5l2-2.5s1.375-1.375 2-1.375h3.25s.875-2.125 1-3.75 2.25-.5 2.25-.5 1.625-.5 2-1 2.5-2 5.875-4 3.375-1.125 4.875-1.25 2.875-.125 3.375-.375 2.125-1.375 2.625-1.625 3-1.5 3-.875.25 2 .5 2.5 1.625-.625 3.25-1.875 1.125-1 1.875-2.125 1.5-.375 2.625-.25.75 1.875.875 2.625 2 2.125 3.125 2.875 4.25-3.75 4.75-1.375 3.25 3.25 3.25 4-1.25 2.25-2.125 3-1.625 1.625-2.125 2.75 0 .75 0 1.75-.75.25-1.875 1-1.125 1-2 2-1.375.5-2.25.875-.625 1.5-.875 2.375.5.75.5.75 1.25-.875 1.875-1.25 3-1.625 3.625-2 2.25-1.75 3.625-3.25 3.25-.75 4.25-1 1.625.375 1.625.375 1.25.125 2.375-.5 4-1.25 4.625-1.25 2.25.25 3.125 1 2.375 1.75 3.25 2.375l1.438-.063.312 2.563c0 .5-.125 2 1 3.125s1.5.625 2 1.125-.125 3.75-.25 4.5-.625.75-1.125 1.625-.125 1.375-.5 2.875-.875.875-1.25 2.375 0 1.375.5 2.375.5 1.875.5 3.375-.25.625-.875.75-1.25.625-2.5.75-2.625.625-3.25-.125-1.25-.875-3.5-.625-.625 1-.875 2-1 .875-2.5 1.125-1 .375-1.125 2 1.75 2.625 2.75 3 1.25.625 1.625 1.25 1.5.375 3 1.75.25 1.625-.75 2.625.625 4.5 1.375 5 1.125 1.25 1.5 4.25 1.5 3.25 1.5 3.25.875.5 1 3.625.875 5.75.875 5.75-4.122 7.656-2.892 11.038c1.23 3.382 2.767 9.53.922 11.683-1.845 2.152-2.767 2.152-3.382.922-.615-1.23.308-1.537-1.845-1.845-2.152-.307-1.844.615-3.381.923-1.538.307-2.152 1.844-3.382.615-1.23-1.23 0-1.538-1.845-.923-1.844.615-.922 2.767-3.228 3.228-2.306.462-1.998-.307-2.92 1.23-.923 1.537-1.384 1.998-1.691 2.767-.308.769-.923.615-.308 1.998.615 1.384 2.152-.614 1.998 2.152-.153 2.767-.46 4.458-.46 4.458s-1.077-.768-1.077 1.076c0 1.845.769 1.691.461 3.228-.307 1.538-1.076.615-.614 2.46.46 1.845 1.69 1.845 1.69 1.845s.308-1.845.923-.308-.154 2.46.922 2.92c1.076.462 0 .308 1.691.923 0 0 .692 0 1 .922.307.923 1.152 2.383.307 3.536-.846 1.153-1.538 3.305-.615 5.38.922 2.075 2.536 2.306 2.382 3.536-.153 1.23-.384.922-.538 2.613-.153 1.69.154 2.767-.23 3.459-.385.691-.615 1.844-1.153 2.075-.538.23-1.384-.308-1.922-.615-.538-.308-.153-1.998-1.076-1.307-.922.692-1.076 1.614-1.844 1.153-.769-.461-.692-1.23-1.384-1.383-.692-.154-2.075.307-1.383-1 .692-1.306 1.537-1.537 1.614-2.382.077-.846.461-1.614 0-2.536-.461-.923-.769-1.922-1.537-2.076-.769-.153-.769-.615-1.691-1.46-.923-.845-1-1.921-1.691-1.69-.692.23-1.845 2.074-3.459 1.767-1.614-.308-2.229.384-2.767-.692-.538-1.076-.768-1.46-1.383-1.614-.615-.154-.923-.23-.769-.922.154-.692.23-.385.23-1.614 0-1.23.078-3.92-.845-5.227-.922-1.306-.922-1.383-.922-1.844 0-.462.461-.692-.307-1-.77-.307-1.922-2.382-2.153-3.15-.23-.77-1.383-.77-1.767-.77-.385 0-1.307-2.536-1.307-2.536s-3.92.077-3.843-.845c.077-.922.538-1.845.615-2.23.077-.383.692-2.766.077-3.611-.615-.846-1.691-1.615-2.306-1.691-.615-.077-1.69-.385-2.306.538-.615.922-1.153 1.537-1.46 1.383-.308-.154-.769-.077-.922-.922-.154-.846-.538-2.998.615-4.612 1.152-1.614.768.538 1.46-.23.692-.769 1.076-2.23 1.076-2.998 0-.768-.461-1.537.538-2.536.999-1 1.768-.692 2.229-1.614.461-.923 1.23-1.076.692-1.922-.538-.845-1.384-1.614-1.46-2.69-.078-1.076.307-.999-.385-1.69-.692-.693-1.23-1-1.307-1.769-.077-.768 1.384-.46-.077-1.306-1.46-.846-1.921-.23-1.69-1.614.23-1.384 0-2.537.46-3.305.462-.769-.307-3.228-.614-3.613-.308-.384-1.076-.999-1.46-1.537-.385-.538-.308-1.844-.615-2.075-.308-.23-1.46-1.153-1.768-1.614-.308-.461-.308-.692-.615-1.46-.307-.769-1.537-1.307-1.845-1.691-.307-.385-2.69-1-2.843-1.384-.154-.384-.231-1.306-.077-2.075.153-.769.384-1.921.153-2.844-.23-.922-.307-1.844-.384-3.15-.077-1.308-.615-1.922-1.614-1.922-1 0-1.46.46-1.537 0-.077-.462-.615-2.076-.615-2.46 0-.384-1.383-3.997-1.69-4.227-.308-.23-.308-.308-1.154-1.076-.845-.769-1.46-1.384-2.075-1.46-.615-.077-1-.77-1.076-1.538-.077-.768-.307-2.69-.174-2.848z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "siberia").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12923)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "siberia").owner ? `#siberia_${phase}_modal` : null}
      />
      <path
        id="ural"
        d="M665.794 265.915c1.06-.53.163-1.537.163-3.304 0-1.768-.53-1.945-.707-3.182-.177-1.238-.53-1.591-.707-2.475-.177-.884 1.59-1.768 2.298-3.182.707-1.414 0-1.945-.177-3.182-.177-1.238-1.768-1.238-1.768-1.238l-3.182-2.12-1.414-.708s-.177-1.414 0-3.005 1.06-2.122 1.768-3.359c.707-1.237.707-2.652.707-3.536 0-.883-1.768-1.237-1.768-1.237v-4.066-4.773c0-1.237-.707-3.535-1.237-4.42-.53-.883.53-2.474.53-2.474s-.884-1.945-1.06-2.828c-.177-.884 1.06-4.773 1.06-4.773l1.945-4.773 1.237-2.122s0-3.182.53-3.889c.53-.707.354-4.066.354-4.066s-.707-6.717-1.414-7.16l.673-2.293-1-.875-.375-2.5-2.5-.625.25-3.375s1.5-1.5 2.125-1.5-1.5-2.125-1.75-3 0-1.25.5-1.5.25-1 .125-2-.125-1.125-.125-1.125l.875-2.5 2.875 1s.625 1 1.25 1.125 1.25 0 1.75 0 .25.125 1 1.625.75 0 1.875.25 1.125 1.375 1 2.125-.75 1.375-1.375 2.5-.5.75-1.5 1.875 1.5 1.875 1.5 1.875.25 1.5.875 2.375.125.25 1.125.75 0 .875 0 2.25.75.25.75.25.5.625.875 1.875.125.5 1 2.375 1.25-.125 1.25-.125.75.625 1.25 1.625 2.375.625 2.375.625 1-1 1.75-1.625.5-.375 1.5-.75.049.147.674 1.897.423 3.058.5 3.826c.077.769.461 1.46 1.076 1.537.615.077 1.23.692 2.075 1.46.846.77.846.846 1.153 1.077.308.23 1.691 3.843 1.691 4.227 0 .384.538 1.998.615 2.46.077.46.538 0 1.537 0 1 0 1.537.614 1.614 1.921.077 1.307.154 2.229.384 3.151.231.923 0 2.075-.153 2.844-.154.769-.077 1.691.077 2.075.153.385 2.536 1 2.843 1.384.308.384 1.538.922 1.845 1.69.307.77.307 1 .615 1.461.307.461 1.46 1.383 1.768 1.614.307.23.23 1.537.614 2.075.385.538 1.153 1.153 1.46 1.537.308.385 1.077 2.844.616 3.613-.461.768-.23 1.921-.461 3.305-.231 1.383.23.768 1.69 1.614 1.46.845 0 .538.077 1.306.077.769.615 1.076 1.307 1.768s.307.615.384 1.691c.077 1.076.923 1.845 1.46 2.69.539.846-.23 1-.691 1.922-.461.922-1.23.615-2.23 1.614-.998.999-.537 1.768-.537 2.536 0 .769-.384 2.229-1.076 2.998-.692.768-.308-1.384-1.46.23-1.153 1.614-.77 3.766-.615 4.612.153.845.615.768.922.922.307.154.845-.461 1.46-1.383.615-.923 1.691-.615 2.306-.538.615.076 1.691.845 2.306 1.69.615.846 0 3.229-.077 3.613-.077.384-.538 1.307-.615 2.229-.077.922 3.843.845 3.843.845s.922 2.537 1.307 2.537c.384 0 1.537 0 1.767.768.231.769 1.384 2.844 2.153 3.151.768.308.307.538.307 1 0 .46 0 .538.922 1.844.923 1.307.846 3.997.846 5.227 0 1.23-.077.922-.23 1.614l-2.531.205s.652 4.239 0 4.565c-.652.326-3.804.76-3.804.76s-.109 3.262-.218 3.805c-.108.544-1.63 1.522-1.956 2.065-.326.544-.652.544-.326 1.196.326.652.543 1.522.434 1.957-.108.434.544 1.304-.652 1.521-1.195.218-1.739.652-2.391.109-.652-.544-.87-1.74-1.74-2.174-.869-.435-1.195-.435-1.303-1.304-.11-.87-.435-2.174-.435-2.174s-1.087-1.63-1.63-1.63c-.544 0-2.718.543-3.153.217-.435-.326-2.5-.109-3.26-.761-.762-.652-.87-1.196-1.849-.761-.978.435-2.717.543-2.717.543l-1.63-1.086s-.87-.327-1.74-.87c-.87-.544-.978-1.848-1.304-2.391-.326-.544-.978-1.413-1.413-1.74-.435-.326-.87-.978-1.413-1.521-.543-.544-1.196-.87-1.956-1.087-.761-.218-1.414-.326-1.63-.978-.218-.653 0-1.196-.436-1.305-.434-.108-1.521-.543-1.521-.543s-.11-1.522-.653-1.848c-.543-.326-1.63-1.196-2.282-1.522-.652-.326-1.413-.435-1.63-1.304-.218-.87-.544-1.196-.544-1.196s-1.304-.87-1.522-1.413c-.217-.543-.87-1.63-.87-1.63l-1.412-1.522-1.63-.544-2.033-.128z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "ural").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12927)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "ural").owner ? `#ural_${phase}_modal` : null}
      />
      <path
        id="afghanistan"
        d="m707.609 296.804-.109-.217c-.652-.544-.87-1.74-1.74-2.174-.869-.435-1.195-.435-1.303-1.304-.11-.87-.435-2.174-.435-2.174s-1.087-1.63-1.63-1.63c-.544 0-2.718.543-3.153.217-.435-.326-2.5-.109-3.26-.761-.762-.652-.87-1.196-1.849-.761-.978.435-2.717.543-2.717.543l-1.63-1.086s-.87-.327-1.74-.87c-.87-.544-.978-1.848-1.304-2.391-.326-.544-.978-1.413-1.413-1.74-.435-.326-.87-.978-1.413-1.521-.543-.544-1.196-.87-1.956-1.087-.761-.218-1.414-.326-1.63-.978-.218-.653 0-1.196-.436-1.305-.434-.108-1.521-.543-1.521-.543s-.11-1.522-.653-1.848c-.543-.326-1.63-1.196-2.282-1.522-.652-.326-1.413-.435-1.63-1.304-.218-.87-.544-1.196-.544-1.196s-1.304-.87-1.522-1.413c-.217-.543-.87-1.63-.87-1.63l-1.412-1.522-1.63-.544-2.033-.128-.547.477c-1.061.53-.527.461-1.411.815-.884.353-4.066.353-4.243 1.59-.177 1.238-.354 1.592-1.06 3.006-.708 1.414-.885 1.768-1.768 1.945-.884.176-1.238 0-2.122-.177-.884-.177-2.475-.884-2.475-.884l-1.414-.177-1.237-1.237s-.707.53-1.414.884c-.708.353-2.299 1.767-2.299 1.767s-2.474.707-3.182.707c-.707 0-.707-.176-1.414 0-.707.177-1.944 0-2.475.708-.53.707.707 1.414-1.944 1.59-2.652.177-2.652.177-3.359.177-.707 0-1.944 3.713-1.944 3.713s1.414 1.237.353 1.59c-1.06.354-1.768 1.415-2.298 2.122-.53.707-.884 1.237-.707 2.121.177.884 0 1.415.353 2.475.354 1.06 1.238 3.182 1.238 3.182s.707.354.53 1.414c-.177 1.061-.707 1.591-.177 2.475.53.884 1.591 1.238 1.591 1.238l1.061 1.414s1.414-.354 1.414.884c0 1.237.177 1.768.354 3.182 0 0 1.021 1.399 1.728.868.708-.53 1.945-1.414 1.945-2.474 0-1.061-.177-1.415.707-1.591.884-.177 1.414-.177 2.298-.53.884-.354.53-.354 1.591-.354 1.06 0 .884-.53 1.414.53.53 1.06-.176.354.177 1.945.354 1.59.53 1.414.707 2.474.177 1.061 0 .708-.353 2.122-.354 1.414-.354 1.59-1.238 1.944-.884.354-2.651 1.238-2.828 2.652-.177 1.414 0-.354.177 1.944.176 2.299.176 3.006.884 3.36.707.353.883.176.883 1.237 0 1.06-.53 1.414.707 1.59 1.238.177 2.122-.176 2.122-.176s2.298.353 1.768 1.768c-.53 1.414-1.591.53-.884 2.12.707 1.592.884.354 1.06 2.122.177 1.768-.53 2.298.354 2.298s2.475.707 2.475.707l.177 2.299.353 1.414s-2.298-.884-1.944.707c.353 1.59.707 1.59.707 1.59s2.298-.176 2.298 1.415-.354 2.121-.177 3.005c.177.884 1.06.177.884 1.415 0 0-.147 1.944.777 2.487.924.544 1.848.598 2.283.435.435-.163 1.25-1.576 2.12-1.522.87.055 1.413-.38 2.01.163.598.544 1.196.435 1.74.544.543.109.923.272 1.684 1.033.761.76 1.087 1.25 1.25 1.521.163.272.163 1.033.544 1.576.38.544 1.25.707 1.522.761.271.055 1.902-.163 2.39.218.49.38 1.686 2.01 1.794 2.445.109.435 1.305.87 1.305.87s2.717-.326 3.152-1.522c.435-1.196 2.717-2.717 2.717-3.478 0-.761 0-1.957.544-2.065.543-.11 2.826-.87 3.587-.761.76.108 2.282.435 2.717-.544.435-.978.326-3.804 1.848-3.913 1.522-.108 2.391-.978 3.37 0 .978.978 3.695 2.5 3.695 2.5s3.696.544 4.891-.76c1.196-1.305 2.283-2.935 2.283-3.805 0-.87.326-1.196.326-2.174s-.87-3.696-.87-3.696-.76-1.195-1.412-1.413c-.653-.217-1.63-1.304-1.63-1.304s-.762-2.065-.762-2.935c0-.87.435-4.456.978-4.565.544-.109 2.066-1.087 2.935-1.087.87 0 2.283.109 2.718-.217.434-.326 1.195-4.457 1.63-5.544.435-1.087.652-1.956 1.413-1.848.761.11 2.174 0 2.065-1.847-.108-1.848-.326-5.435-1.087-6.63-.76-1.197-1.304-1.414-.87-2.5.436-1.088.98-1.414.98-1.414l-.218-1.522z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "afghanistan").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12931)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "afghanistan").owner ? `#afghanistan_${phase}_modal` : null}
      />
      <path
        id="middle_east"
        d="M652.66 343.029c-.177 1.06.53 1.59-.884 1.944-1.415.354-2.475 1.415-2.475 1.415s1.59 1.59-1.768.883c-3.359-.707-2.828-1.237-4.243-1.59-1.414-.354-1.237.353-2.298-.354-1.06-.707-1.414-.354-1.767-1.414-.354-1.06-2.975-2.538-2.975-2.538s-.875 0-1 .875 1.75.875-.375 1.25c0 0-1.25.125-1.875.25s-1.25-.25-1.875.25-.625.875-1.5 1-.75 0-1.75.125-1.75 1-1.75 1 .25.5-1.375.375-2.25.25-2.25.25 0 1.5-1.375.5-2-1-2-1.5.625-1 1.125-1.5c0 0-.47-1.486-2.327-1.133-1.856.354-3.005.265-3.447.884-.442.619-.884 1.856-1.591 1.945-.707.088-2.74.265-3.27-.354-.53-.619-1.49-2.592-3.99-3.342s-4.625-1.375-5.5-.75-.125 1.375-1.875.875-3.5-1.25-4-1-2.125 0-2.125.625.75 1.625-.25 1.75-2.25.625-2.875.875-.25.5-2.5.5-4.5.375-5.375-.375-1.25-1.625-1.625-2.125-1.375-1-1.375-1h-1.25s-1.375.375-1.875 1-.5 1-1 1.375-.5.25-1.125 1-.125 1.125-.625 1.75-.875.125-1.125 1 0 .5.125 1.375.75.875 0 1.875c0 0 1.063 2.188 1.5 3.25.438 1.063 1.875 1.625.75 2s-2.5.438-2.25 1.438 2.625 3.375 3.313 4.562c.687 1.188.187 3.875 1.312 4.875s2.875 1.875 3.5 1.875 2.5-1.375 2.75-.125-.25 3.625.5 3.75 2.5 1 2.875.375-1.253-2.394-.016-2.924c1.238-.53 0-3.006 2.652-1.768 2.652 1.237 2.652 2.121 4.243 2.298 1.59.177 2.651-.354 3.712-.177 1.06.177 2.298 1.238 2.652 0 .353-1.237 1.237-1.944 2.121-1.944.884 0 2.828-.53 3.182.53.354 1.06-.53 2.298-.354 3.359.177 1.06 1.238 1.414.884 7.424-.353 6.01 1.061 9.016.177 9.546-.884.53-2.121 2.122-1.768 3.006.354.883 1.768 3.889 1.945 6.01.177 2.121.884 2.652 1.06 3.712.177 1.06-1.237 1.238.177 3.005 1.414 1.768 4.42 2.829 4.243 4.066-.177 1.238 1.944 1.768 2.828 3.006.884 1.237 2.298 4.772 2.652 6.363.354 1.591 1.591-.707 2.298 1.945.707 2.652 2.829 2.298 3.359 4.243.53 1.944 2.453 3.8 3.453 4.3s4.25 1.25 4 3 2.75 3.5 2.75 4.75-.25 3.75-.25 3.75-.5.5.5 1.5 1.75 1.75 2 3.25 1.25 1.25 1.25 1.25 9.75-1 13-2 7.25-2.75 7.25-3.75 0-.75 1.5-1.25 2.5-2.5 2.5-2.5l1.5-1.25s.25-2 1.5-1.75 2.75 1 2.75 0-.75.25 2.25-4.75 3.5-6.75 3.25-7.75-.25-1 .75-1.75 1.5-3.25 1.5-3.25l-.5-2.25 1-2.25s1.433-3.917.196-4.448c-1.237-.53-1.06-.884-1.06-2.298 0-1.414-1.592-2.298-1.592-2.298s0 .53-1.414 0-3.182-2.121-3.182-2.121-1.59.707-1.768-.354c-.176-1.06.354-2.651-.53-2.121-.884.53-1.944.353-2.475 1.06-.53.708.707 1.768-2.475 1.768s-3.889 1.061-4.596-.176c-.707-1.238-.707-1.238-1.06-2.652-.354-1.414.707-.707-.884-1.768-1.591-1.06-1.945-1.06-1.945-1.944 0-.884-.53-1.415-.53-1.415s-1.238.708-1.768-.707c-.53-1.414.707-2.298-.707-3.535-1.414-1.238-1.414-1.414-1.945-2.475-.53-1.06-1.06-1.768-1.06-1.768s-1.238-.707-.708-1.414.177-.884 1.768-1.06c1.591-.178 1.945-.531 2.652-1.061.707-.53.353-.884 1.59-1.061 1.238-.177 1.415-1.238 1.945.177.53 1.414.354 1.944.354 3.889 0 1.944-.177 3.359.354 4.42.53 1.06.883 1.59 1.06 2.297.177.707.354 1.238.354 1.238s.177.177 1.06.177c.884 0 1.061-.708 1.415.176.353.884 0 .53.53 1.238.53.707.354 1.06 1.237.707.884-.354 1.061-1.238 1.945-.884.884.354 1.591.53 1.591.53s1.237.177 1.237-.884c0-1.06-.176-1.59.354-2.298.53-.707.884-2.475 1.944-.176 1.061 2.298.53 2.651 1.061 3.535.53.884.884 1.591 1.945 1.238 1.06-.354 1.59-.354 2.298-1.061a6.104 6.104 0 0 1 1.414-1.06s-.177-1.769.884-2.122c1.06-.354 2.298-1.414 2.298-1.414l1.237-1.415 1.061-1.414h2.652s-1.107-4.112-1.26-5.649c-.154-1.537-2-1.69-1.384-2.92.615-1.23 1.23-2.768.307-3.69-.922-.922-2.46-1.844-2.46-3.074 0-1.23.462-1.23-.307-2.46-.768-1.23-1.23-2.613-1.23-3.382 0-.768.035-1.56-.46-2.766-.646-1.57-2.373-.027-1.999-2.767.894-6.559.864-8.243.845-8.224-.018.018.32-2.266.32-2.266s-1.196-.435-1.305-.87c-.108-.435-1.304-2.065-1.793-2.445-.49-.38-2.12-.163-2.391-.218-.272-.054-1.142-.217-1.522-.76-.38-.544-.38-1.305-.544-1.577-.163-.271-.489-.76-1.25-1.521-.76-.761-1.141-.924-1.684-1.033-.544-.109-1.142 0-1.74-.544-.597-.543-1.14-.108-2.01-.163-.87-.054-1.685 1.36-2.12 1.522-.435.163-1.359.109-2.283-.435-.38-.108-1.032-.163-1.032-.163l-.275 1.388z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "middle_east").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12935)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "middle_east").owner ? `#middle_east_${phase}_modal` : null}
      />
      <path
        id="india"
        d="M701.413 335.5c0 .87-1.087 2.5-2.283 3.804-1.195 1.305-4.89.761-4.89.761s-2.718-1.522-3.697-2.5c-.978-.978-1.847-.108-3.37 0-1.52.109-1.412 2.935-1.847 3.913-.435.979-1.956.652-2.717.544-.761-.109-3.044.652-3.587.76-.544.11-.544 1.305-.544 2.066 0 .76-2.282 2.282-2.717 3.478-.435 1.196-3.207 1.685-3.098 1.522.109-.163-.392 2.284-.374 2.266.019-.018.05 1.665-.845 8.224-.374 2.74 1.353 1.197 1.998 2.767.496 1.206.462 1.998.462 2.766 0 .769.46 2.153 1.23 3.382.768 1.23.307 1.23.307 2.46s1.537 2.152 2.46 3.074c.922.922.307 2.46-.308 3.69s1.23 1.383 1.383 2.92c.154 1.537 1.152 5.486 1.234 5.622.788.136 1.44-.857 2.148-1.033.707-.177 3.005-.884 3.359.353.353 1.238.177 3.182.53 3.89.354.706 2.652 1.59 2.652 1.59h1.414c.707 0 1.06-.884 1.237.354.177 1.237-.176 1.768.177 2.475.354.707 2.652.707 2.652.707s2.298 0 1.237 1.06c-1.06 1.061-1.767 1.238-2.121 1.945-.354.707-1.06.884-.177 1.237.884.354.707-.53 1.414.707.708 1.238.53.884 1.061 1.591.53.708-.353.884 1.238 1.061 1.59.177 2.12 0 2.12 0l.708-1.768s.884-1.237 1.59.177c.708 1.414.01 1.384-.167 3.152-.177 1.768-.354 3.514-.354 4.751 0 1.238-.75 1.945-.573 3.182.177 1.238.427 2.018.427 3.432 0 1.414 1.375.863 1.375 2.1 0 1.238-.177 1.591.53 2.298.707.707 1.475 2.247 1.475 2.954 0 .707.686.987.686 2.225 0 1.237-.052 2.37.655 2.724.707.354 1.863.552 1.863 1.966 0 1.415 1.155 2.932 1.155 2.932s.56 1.28.56 1.988c0 .707 1.208 1.121 1.208 1.828 0 .707 1.414 0 2.298 4.773.884 4.773 1.414 1.768 2.828 5.834 1.415 4.066 2.122 5.126 3.005 5.126.884 0 1.945-.353 2.122-1.237.177-.884 0-.884.884-1.237.884-.354.707-.177.884-1.238.176-1.06-.708-1.237-.354-1.944.354-.708-.53-2.122.884-2.122 1.414 0 2.475-1.237 2.475-1.237s-.53-.707-.53-1.591-.708 1.768 0-2.122c.707-3.889 1.06-4.596.883-6.894-.176-2.298-1.06-1.237 0-4.242 1.061-3.006 1.591-1.591 1.591-3.89 0-2.298 1.061-4.773 1.238-6.187.177-1.414.707-.353.707-1.944s-.884-2.475.177-3.536c1.06-1.06 2.475-1.414 2.475-2.651v-2.652c0-.884.353-2.652.353-2.652s2.298-.177 1.768-1.237-.354-2.298 0-3.182c.353-.884 1.398-4.585 2.898-3.585 1.5 1 2 1 2 1s1.375-1.375 1.25-2 .5-1.75.5-1.75.25-1.75.75-1.875 2.875-.25 2.875-.25-.404-3.83.518-3.907c.922-.077 1.383.077 1.614-.922.23-1 1-1.999 1.537-2.23.538-.23.692-2.612.692-2.612l1.768-.615s.46-3.92 1.153-4.612c.691-.692 1.69-2.536 1.69-2.536s-2.536-6.994-2.92-7.379c-.385-.384-9.761-.538-9.838-.23-.077.307-1.153 1.768-1.614 1.768-.461 0-1.691-1.307-1.691-1.307s.384-3.612.077-3.997c-.308-.384-2.921-1.383-3.228-1.23-.308.154-.923 2.153-1.384 2.153-.461 0-3.69-1.768-3.997-2.998-.307-1.23.615-1.23-.768-1.307-1.384-.076-.308 1.384-2.383.923-2.075-.461-2.306-.769-2.613-1.076-.307-.308-1.23-1.46-2.306-1.46s-3.228-1.154-3.382-1.538c-.153-.384-.538-.845-.845-1.23-.308-.384-.308-1.69-.769-2.075-.46-.384-2.075.923-2.46 1-.383.076-1.69-.462-1.46-1.23.231-.769.615-1.768 1.077-1.999.46-.23 1.383-.999 1.46-1.537.077-.538.384-.768.538-1.998.154-1.23-.538-4.074-.692-4.996-.154-.922-.154-3.766-.154-3.766s.077-1.076.077-1.384c0-.307.23-.999.23-.999s-1.383.384-1.69.461c-.308.077-3.382.077-3.69.077-.307 0-1.998-.922-2.075-1.23-.076-.307-.23-2.075-.384-2.382-.154-.308-.23-1.384-.538-1.076l-1.383 1.998.077.154c-1.922.999-2.998.615-3.081.449z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "india").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12939)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "india").owner ? `#india_${phase}_modal` : null}
      />
      <path
        id="siam"
        d="M788.375 388c-1.875-.375.375-1.875-3.25-2.375S781.75 394.75 782 395.75s1.25 1.5 3.5 1.25 1.75 0 2.25 2.25-.25 4-.25 4 .75-.25 2-.75 3 .75 3.75 4.25 1 3.5 2.25 5.5 1 3 1.5 5.75-.5 6-.75 7.75-3.5 5.25-3.5 6.25-3.25 3.5-3.5 4.5-1.5-.75-1.5-.75-1.25-3.5-1.75-4.5-1.25-1.5-1.25-1.5l.25-2.25s-1.25-.75-2.25-.75-1-1-1-1L779.5 424s-.25-.25-1.5-.5-1 0-1.25 1-.75 1-2 2.25.5.75 1.75 2 .75.75.75 2.75 0 2.75 1.75 7.5 1.5 1.75 1.5 1.75.5.75.5 2-1 1.25-1 1.25-1.75.25-3.25 0-.5-.5-3-3.75-2.5-3.5-3.5-4.25.25-1.75 0-3 0-3-.75-4-.75-1.5-1.25-3.25 0-3.25.25-4.75-1.25-1.75-1.5-3.75-.5-1.75-.5-1.75-4.5-2.75-5.25-1.75-2-2-2-2-3.25 1-3.5-.5-6.75-8.25-7-10-.25-3.5-1.5-3.75-2.125-3-2.125-3l-.875-2.125c-.273-3.373.214-3.616.518-3.907.922-.077 1.383.077 1.614-.922.23-1 1-1.999 1.537-2.23.538-.23.692-2.612.692-2.612l1.768-.615s.46-3.92 1.153-4.612c.691-.692 1.69-2.536 1.69-2.536.692-.922 1.076-.384 1.076-.384l1.23-.923s.692-1.153 1-1.69c.307-.539.46-.616.999-.462.538.154.845 1.076 1.614 1.46.768.385 1.153.539 1.537.846.384.307.538 1.768.845 2.69.308.922.538.692 1.46 1.23.923.538.385.692.308.999-.077.307 1.383 2.306 2.152 2.229.769-.077 2.229 1.998 2.767 2.613.538.615 2.306.846 3.305.692 1-.154.692-1.46.692-1.922 0-.46.691-1.921 1.076-1.998.384-.077 2.306 0 3.151-.154.845-.153.461-.691.461-.691s1.076-.923 1.153-1.384c.077-.461.769-1 1.076-1.23.308-.23 1.076-.077 1.46 0 .385.077 1 1.23 1 1.23s1.46.154 1.844.154c.384 0 .692.768.692 1.537v1.46c0 .538.845.615.845.615s.538.077.692.538c.154.461.154.615.615.615.461 0 .461.846.461.846s1.537 1.383.922 1.69c-.614.308.72 2.453.72 2.453z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "siam").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12943)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "siam").owner ? `#siam_${phase}_modal` : null}
      />
      <path
        id="china"
        d="M802.125 324c-1 .5-.125.5-.125 1.125s.875.25.875 1.125.25.75.75 1 .125.75.125 2.125.125.625 1.125.875.5.375.75 1.875 1 .5 1.5.5.5.25.875 1 0 .5-1.25 1.25 1.25.875 2.625 1.25.875 2 .625 3.375.625 1.125 1.5 2.625.125 2.375-.875 4.75.5 1.625 1.625 1.75.875 3.375.125 5 .125 1.5.125 3.625-.375 2.5-.625 4.125-.375 1.375-1 2.375-.25 2-.25 3.625-1.625 1.625-2.75 1.875-.625.125-.5 1.25-.5 1.375-1.5 2.375-.5.25-1.125 1.875-.125.875-1.5 2.125-1.375 1.875-1.375 1.875 0 1.125-.25 2.375-1.125.25-1.625.125-1.375.625-1.75 1.375-1.875 1.125-3.125 2.375.125.25.5 1.125-.875 1.5-1.5 2S793 389.875 792 390.5s-1.794-2.08-3.404-2.522c.265-.066-1.555-2.123-.94-2.43.614-.308-.923-1.691-.923-1.691s0-.846-.461-.846-.461-.154-.615-.615c-.154-.46-.692-.538-.692-.538s-.845-.077-.845-.615v-1.46c0-.769-.308-1.537-.692-1.537-.384 0-1.844-.154-1.844-.154s-.615-1.153-1-1.23c-.384-.077-1.152-.23-1.46 0-.307.23-1 .769-1.076 1.23-.077.461-1.153 1.384-1.153 1.384s.384.538-.461.691c-.845.154-2.767.077-3.151.154-.385.077-1.076 1.537-1.076 1.998 0 .462.307 1.768-.692 1.922-1 .154-2.767-.077-3.305-.692-.538-.615-1.998-2.69-2.767-2.613-.769.077-2.229-1.922-2.152-2.229.077-.307.615-.461-.307-1-.923-.537-1.153-.307-1.46-1.229-.308-.922-.462-2.383-.846-2.69-.384-.307-.769-.461-1.537-.845-.769-.385-1.076-1.307-1.614-1.46-.538-.155-.692-.078-1 .46-.307.538-.999 1.691-.999 1.691l-1.23.923s-.384-.538-1.076.384c0 0-2.536-6.994-2.92-7.379-.385-.384-9.761-.538-9.838-.23-.077.307-1.153 1.768-1.614 1.768-.461 0-1.691-1.307-1.691-1.307s.384-3.612.077-3.997c-.308-.384-2.921-1.383-3.228-1.23-.308.154-.923 2.153-1.384 2.153-.461 0-3.69-1.768-3.997-2.998-.307-1.23.615-1.23-.768-1.307-1.384-.076-.308 1.384-2.383.923-2.075-.461-2.306-.769-2.613-1.076-.307-.308-1.23-1.46-2.306-1.46s-3.228-1.154-3.382-1.538c-.153-.384-.538-.845-.845-1.23-.308-.384-.308-1.69-.769-2.075-.46-.384-2.075.923-2.46 1-.383.076-1.69-.462-1.46-1.23.231-.769.615-1.768 1.077-1.999.46-.23 1.383-.999 1.46-1.537.077-.538.384-.768.538-1.998.154-1.23-.538-4.074-.692-4.996-.154-.922-.154-3.766-.154-3.766s.077-1.076.077-1.384c0-.307.23-.999.23-.999s-1.383.384-1.69.461c-.308.077-3.382.077-3.69.077-.307 0-1.998-.922-2.075-1.23-.076-.307-.23-2.075-.384-2.382-.154-.308-.23-1.384-.538-1.076l-1.383 1.998.077.154c-1.922.999-2.998.615-3.081.449 0-.87.326-1.196.326-2.174s-.87-3.696-.87-3.696-.76-1.195-1.412-1.413c-.653-.217-1.63-1.304-1.63-1.304s-.762-2.065-.762-2.935c0-.87.435-4.456.978-4.565.544-.109 2.066-1.087 2.935-1.087.87 0 2.283.109 2.718-.217.434-.326 1.195-4.457 1.63-5.544.435-1.087.652-1.956 1.413-1.848.761.11 2.174 0 2.065-1.847-.108-1.848-.326-5.435-1.087-6.63-.76-1.197-1.304-1.414-.87-2.5.436-1.088.98-1.414.98-1.414-.09-.177-.218-1.522-.273-1.63.598.434 1.142 0 2.337-.218 1.196-.217.544-1.087.652-1.521.11-.435-.108-1.305-.434-1.957-.326-.652 0-.652.326-1.196.326-.543 1.848-1.521 1.956-2.065.109-.543.218-3.804.218-3.804s3.152-.435 3.804-.761c.652-.326 0-4.565 0-4.565l2.53-.205c-.154.691.154.768.769.922.615.154.845.538 1.383 1.614s1.153.384 2.767.692c1.614.307 2.767-1.537 3.459-1.768.692-.23.768.846 1.69 1.691.923.845.923 1.307 1.692 1.46.768.154 1.076 1.153 1.537 2.076.461.922.077 1.69 0 2.536-.077.845-.923 1.076-1.614 2.383-.692 1.306.692.845 1.383.999.692.153.615.922 1.384 1.383.768.461.922-.461 1.844-1.153.923-.691.538 1 1.076 1.307.538.307 1.384.845 1.922.615 0 0 1.134 1.906 1.752 2.083.619.176 1.15 6.452 1.15 6.452s.972-.619 1.237.177c.265.795.618 2.121.618 2.121s1.326.796 1.326 1.238c0 .441-.088 1.502.265 1.679.354.177 1.768.795 1.768.795l.354 1.326s.177 1.15.707 1.238c.53.088.795-.089 1.502.265.708.353.884.442 1.503.442.619 0 .884-.089.884.442 0 .53-.088 1.414.265 1.502.354.089 1.238.177 1.238.177s.265.53.618.884c.354.354 1.414.442 1.591.795.177.354.265.973.354 1.326.088.354-.265 1.15 1.06 1.238 1.326.088 9.016-1.06 9.016-1.06l.53.883s.53.53 1.15.707c.618.177 1.767-.265 2.74.177.972.442 1.767.707 2.21.707h1.325s.265 1.237.707 1.326c.442.088 2.21-.619 2.21-.619s.353-.53.884-.442c.53.089.618-1.149 1.59-1.237.973-.089 1.503-.089 1.857-.089.353 0 2.475-1.06 2.563-.176.089.883.177 1.414.619 1.944s1.68.884 2.121.884c.442 0 1.414-.619 2.033-.972.619-.354.884-.707 1.68-.53.795.176 1.59.706 1.944.883.354.177.53.177 1.591.53 1.06.354 2.475.266 2.475.266s2.563.265 3.535.53c1.68 1.237 2.387 1.15 2.918.947z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "china").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12947)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "china").owner ? `#china_${phase}_modal` : null}
      />
      <path
        id="mongolia"
        d="M737.082 273.64s.692 0 1 .922c.307.923 1.152 2.383.307 3.536-.846 1.153-1.538 3.305-.615 5.38.922 2.075 2.536 2.306 2.382 3.536-.153 1.23-.384.922-.538 2.613-.153 1.69.154 2.767-.237 3.478-.193.957-1.146 2.056-1.146 2.056s1.134 1.906 1.752 2.083c.619.176 1.15 6.452 1.15 6.452s.972-.619 1.237.177c.265.795.618 2.121.618 2.121s1.326.796 1.326 1.238c0 .441-.088 1.502.265 1.679.354.177 1.768.795 1.768.795l.354 1.326s.177 1.15.707 1.238c.53.088.795-.089 1.502.265.708.353.884.442 1.503.442.619 0 .884-.089.884.442 0 .53-.088 1.414.265 1.502.354.089 1.238.177 1.238.177s.265.53.618.884c.354.354 1.414.442 1.591.795.177.354.265.973.354 1.326.088.354-.265 1.15 1.06 1.238 1.326.088 9.016-1.06 9.016-1.06l.53.883s.53.53 1.15.707c.618.177 1.767-.265 2.74.177.972.442 1.767.707 2.21.707h1.325s.265 1.237.707 1.326c.442.088 2.21-.619 2.21-.619s.353-.53.884-.442c.53.089.618-1.149 1.59-1.237.973-.089 1.503-.089 1.857-.089.353 0 2.475-1.06 2.563-.176.089.883.177 1.414.619 1.944s1.68.884 2.121.884c.442 0 1.414-.619 2.033-.972.619-.354.884-.707 1.68-.53.795.176 1.59.706 1.944.883.354.177.53.177 1.591.53 1.06.354 2.475.266 2.475.266s2.563.265 3.463.597c.428.255 2.303.942 2.99.88 1-.5.875.5 2.25-1s.5-.25 1.875-2.25 3.625-2.25 1.125-2.5-2.125.5-3-.375-.125-1.125-1.625-1-1.5.375-1.875-.125.75-.875-1.125-.875-1.25.75-2.75-.125-1.625-.5-1.5-1.5.125-1.875 1.125-2.125.75 0 1.375-.5 1-.625 1-1.375 1.375-1.125 1.75-2.125.375-2.5 1.125-2.5.75-.125 1.375 1.625-.875 2.5.875 2.625 2.75.25 3.5.125.25.125 1.125 1.125.75 1.5 1.625 2.125 1 1.75 1 1.75 0 .625 1.125.375 2.875-.25 2.875-.25-.5-.625.125 1.5 1 1.625 1 3.5-.875 2.875 0 3.5a6.25 6.25 0 0 0 1.875.875s2.625-2.5 2.875-3.625 1-1.5.875-2.375-.375-.25.125-1.375.5-3.125.5-3.125-.5-.125-1-.375-.75-.125-1-1.5.25-1.375-.625-1.75-1.25-1-1.5-1.75-.125-1.25-.75-1.375-.5-.25-1.875-1.25-1.125-.5-2.125-1.125-1.25-1-1.25-1.875-.25-1.125.375-1.75 1 .75 1.125-1.5-.625-2.375.5-4.625.875-3.125 1.75-3.875c.563-.438.438 0 2.094-1.75.095.054.095.142-.877-.035-.972-.176-1.149-2.032-2.386-2.12-1.238-.09-2.033-.796-2.298-1.769-.266-.972-1.15-3.8-3.094-3.712-1.944.088-2.298-2.475-4.066-4.596-1.768-2.121 2.121-1.945 2.121-2.652 0-.707-.265-.088-.53-2.033 0 0-.902.917-2.027.604-1.125-.312-1.875-.687-2-1.562s-1.25-1.313-1.25-1.313-1.562-.062-1.625-.562c-.062-.5-.312-.875-.5-2.438-.187-1.562-.062-1.937-.687-1.937s-1.375.125-1.625-.125-.563-.438-.625-1.25c-.063-.813-.125-1.625-.5-1.75s-1-.438-1.375-.438-1.625.25-1.75-.25-.25-1.187-.125-1.687.313-.813.313-1.25c0-.438-.25-1.438-.25-1.438s-.438 0-.875-.375c-.438-.375-.438-.937-1.063-1.062s-1-.313-1.563.313c-.562.625-.937 1.187-1.25 1.312-.312.125-2.187.313-2.812.313s-1.563-.375-1.563-.375l-.437-.5s-.875-.313-.875.062.313.75 0 1.25-.125.5-.813 1.063c-.687.562-1.125.687-1.187 1.125-.063.437-.063.625.313 1.062.375.438.562.313.75.875.187.563.25.688.25 1.313s.062 1.5-.375 1.875c-.438.375-.563.312-.875 1.125-.313.812-.563.937-.75 1.312-.188.375-.438.563-.063 1.313s.75 1.25 1 1.562c.25.313.563.813.313 1.625-.25.813-.313 1.25-.813 1.75-.5.5-.938 1.563-1.313 2-.375.438-.25.938-.875.625-.625-.313-1.062-.875-1.125-1.125l-.312-1.25c-.188-.75-.438-1.688-.563-1.938-.125-.25-1.713-1.091-2.11-.296-.399.796-.266 1.547-.885 1.812-.618.265-.751.265-1.016.663s-1.017 1.503-1.591 1.37c-.575-.132-.707-.265-1.635-.397-.928-.133-1.68-.442-2.078.132-.397.575-1.414 1.414-2.12 1.15-.708-.266-1.636-.796-1.857-1.017-.221-.221-1.591-.84-2.298-.752-.707.089-.707.266-2.077.177-1.37-.088-2.696-.619-3.58-.619-.884 0-3.182-1.149-3.889-1.016-.707.133-.575.133-1.326.442-.751.31-1.282-.177-1.59.353-.31.53-.31 1.282-1.238 1.15-.928-.133-1.415-.133-1.768-.487-.354-.353-.619-.884-.619-.884s-.574-.22-.928-.132c-.353.088-1.281 0-1.281 0s-.796-.796-.973-.84c-.177-.044-.928-.486-1.237-.442-.31.044-1.635.265-1.635.265s-1.945.133-1.624.571z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "mongolia").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12951)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "mongolia").owner ? `#mongolia_${phase}_modal` : null}
      />
      <path
        id="irkutsk"
        d="M807.428 271.611c.265 1.945-.089.972-.089.972s-.902.917-2.027.604c-1.125-.312-1.875-.687-2-1.562s-1.25-1.313-1.25-1.313-1.562-.062-1.625-.562c-.062-.5-.312-.875-.5-2.438-.187-1.562-.062-1.937-.687-1.937s-1.375.125-1.625-.125-.563-.438-.625-1.25c-.063-.813-.125-1.625-.5-1.75s-1-.438-1.375-.438-1.625.25-1.75-.25-.25-1.187-.125-1.687.313-.813.313-1.25c0-.438-.25-1.438-.25-1.438s-.438 0-.875-.375c-.438-.375-.438-.937-1.063-1.062s-1-.313-1.563.313c-.562.625-.937 1.187-1.25 1.312-.312.125-2.187.313-2.812.313s-1.563-.375-1.563-.375l-.437-.5s-.875-.313-.875.062.313.75 0 1.25-.125.5-.813 1.063c-.687.562-1.125.687-1.187 1.125-.063.437-.063.625.313 1.062.375.438.562.313.75.875.187.563.25.688.25 1.313s.062 1.5-.375 1.875c-.438.375-.563.312-.875 1.125-.313.812-.563.937-.75 1.312-.188.375-.438.563-.063 1.313s.75 1.25 1 1.562c.25.313.563.813.313 1.625-.25.813-.313 1.25-.813 1.75-.5.5-.938 1.563-1.313 2-.375.438-.25.938-.875.625-.625-.313-1.062-.875-1.125-1.125l-.312-1.25c-.188-.75-.438-1.688-.563-1.938-.125-.25-1.713-1.091-2.11-.296-.399.796-.266 1.547-.885 1.812-.618.265-.751.265-1.016.663s-1.017 1.503-1.591 1.37c-.575-.132-.707-.265-1.635-.397-.928-.133-1.68-.442-2.078.132-.397.575-1.414 1.414-2.12 1.15-.708-.266-1.636-.796-1.857-1.017-.221-.221-1.591-.84-2.298-.752-.707.089-.707.266-2.077.177-1.37-.088-2.696-.619-3.58-.619-.884 0-3.182-1.149-3.889-1.016-.707.133-.575.133-1.326.442-.751.31-1.282-.177-1.59.353-.31.53-.31 1.282-1.238 1.15-.928-.133-1.415-.133-1.768-.487-.354-.353-.619-.884-.619-.884s-.574-.22-.928-.132c-.353.088-1.281 0-1.281 0s-.796-.796-.973-.84c-.177-.044-.928-.486-1.237-.442-.31.044-1.635.265-1.635.265s-1.945.133-1.624.571c-1.691-.615-.615-.461-1.691-.922s-.307-1.384-.922-2.92c-.615-1.538-.923.307-.923.307s-1.23 0-1.69-1.845c-.462-1.845.307-.922.614-2.46.308-1.537-.46-1.383-.46-3.228 0-1.844 1.075-1.076 1.075-1.076s.308-1.69.461-4.458c.154-2.766-1.383-.768-1.998-2.152-.615-1.383 0-1.23.308-1.998.307-.769.768-1.23 1.69-2.767.923-1.537.615-.768 2.921-1.23 2.306-.46 1.384-2.613 3.228-3.228 1.845-.615.615-.307 1.845.923s1.844-.308 3.382-.615c1.537-.308 1.23-1.23 3.381-.923 2.153.308 1.23.615 1.845 1.845s1.537 1.23 3.382-.922c1.845-2.152.307-8.301-.922-11.683-1.23-3.382 2.892-11.038 2.892-11.038s4.875-1.5 6.125-2.25 1.125-.875 1.5-2.625.5-4.625 1.875-4.875 1.125 1.75 1.125 1.75c.125.75 1.5.5 3 .75 1.058.176.624-.767.407-1.689-.09-.385-.143-.766-.032-1.061.375-1 12.295.113 12.295.113-.442 1.06-.354 2.475-.088 2.917.265.442 1.414 2.917 1.06 4.95-.353 2.033-.884 8.131-.619 9.28.266 1.15.354 3.978 1.15 4.773.795.796 1.149 1.415 1.502 2.122.354.707 3.978 1.856 4.596 3.359.62 1.502.266 1.856 1.326 2.474 1.06.62 2.033 1.945 2.121 3.182.089 1.238.089 3.094.973 2.829.884-.265 1.856-1.503 2.21-1.856.353-.354 1.679-.796 2.828-.354 1.149.442 1.414.442 2.563.265 1.15-.177 2.21.177 2.21.177s.884 1.326.972 2.033c.089.707-.442 1.237 1.15 1.149 1.59-.088 1.944-.177 2.12 1.591.177 1.768 1.15 2.74 1.15 2.74s.265 1.856.176 2.298c-.088.442-.707 1.503-.442 2.652.266 1.149.884 2.298.354 3.093-.53.796-1.414 2.564-1.414 3.27 0 .708-.177 2.564 0 3.183.177.618-.53.176-.265 2.121z"
        className="land asia"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "irkutsk").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12955)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "irkutsk").owner ? `#irkutsk_${phase}_modal` : null}
      />
      <path
        id="ukraine"
        d="M580.446 188.26c-1.237-.088-2.121-.353-2.121-.353s.925 3.968.3 4.468.75 3.625 0 4.125-1.125 6.25-1.125 8.875 1.375 6.75 1 8.875.625 5.125.625 5.125.625.625.625 2.25.875 2.5.875 2.5.438.125.5.688c.063.562.063 1.437-.188 1.687-.25.25-.812.688-.812 1.625 0 .938.25 1.313-.063 1.75-.312.438-.562.563-.687 1.625-.125 1.063-.313 2.5-.063 3.063.25.562.688 2.687-.187 2.437s1 .375 1.5.75-1.125 1.125-2 1.375-1.625.25-2.875.125-.875-.375-1.875-.25-3.125.75-4.25.5-1.75-.125-2.5.375-.25 1.5-.25 2.625.75.375.875 1.625.375 1 .75 1.75 1 .125 1 .125 2.125 1.75 1.875 2.875.5 1.875.5 2.875-1.125.25-2.75.125-.625-.875-1.25-2.625-.5-.625-1.5-1-1 .25-1.25 1.375-.375 1.25-1.25 2-.125 1.375-.375 2.5-.625 1-1.375 1.875.25 1.375.625 2.625.875 1.75.875 1.75c.5.5.375 1 .375 1.75s-.5 1.125-1 1.5l1.25.125s1.063.938 1.125 1.25c.063.313 1.188 1.25 1.188 1.25s2.5 1.375 3.375 1.375 1.875-.563 2.375-.625c.5-.063-.063.875-.063 1.188 0 .312.688 3.25 1 3.875.313.625.375 8.062.438 9.437.062 1.375 1.375 2.75 1.75 3.063.375.312.625 1.062.625 1.375 0 .312-.813 1.375-.875 1.812-.063.438.125 1.188.062 1.75-.063.563-.5.813-1 1.25-.5.438-.375 1.438-.688 2.063-.312.625-.812.625-1.437.875s-2.313 3.625-2.5 4c-.188.375-1.938 1-2.5 1-.563 0-2.063.437-2.25.937-.188.5-.188 1.5-.188 1.5l2.313 2.188c.25-.063.5-.813.75-1.188s1.188-.438 1.188-.438 1.625-.062 2.312.375c.688.438.25.75.313 2.063.062 1.313.062 1.063.25 1.688.187.625.5.375 1.625.687 1.125.313.75.188 1.625.313s.687.75 1.125 1.687c.437.938.5 1.625.937 2.438.438.812.438 1.312.438 1.562s-.313 1.5-.375 2.188c-.063.687-.375.812-.5 1.125-.125.312-.063 1.187-.063 1.5 0 .312.438.75.813 1.187.375.438.375.813.375 1.5 0 .688-.563 1.75-.563 2.375s.938 1.063.813 1.625c-.125.563 2.187 2.25 2.187 2.25l1-.75s1-.125 1.75-.875.5-1.125.5-1.125.25-2.375.625-2.875.875-.25 2.5-.625 1 0 1.75 0 1.25.5 2 .75.625.75.875 1.75.5 1.625.625 2.5.125 1 .5 1.875.75.75 1.75 1.375.375.5 1.875 1.25.75-1.125 1.25-2 .75-.875 1.25-1.125.875-.5 1.5-1 .375-.5.75-1.375-.125-1.25-.375-1.75-.75.125-1.375.125-1.375-.75-2-1.5-.125-1-.125-1 .875-1 1.75-1.625.75-.5 1.5-.75 1.25-.25 1.875-.5 1.125-.375 2.375-.625.75 0 2.125 0 1.625-.25 1.625-.25.375-.5 1-.875.875-.125 1.25.375-.25 1.25-.25 1.25l-1.5 1.5c-.875.875-1 .375-2.625.625s-.5.25-.625 1.125-.75 1.625-.75 1.625l-.5 1.25.875.5s.375.75.625 1.75.75.375 1.375.625-.125 1-.125 1.75 1.125 1.375 1.75 2 .375.875 1 2 .5-.375 1-.625.75-.25 1.875-.375 1.25.125 1.25.125l-.625 1.5s.75.5 1.625 1.375.25 1.625 1.375 1.625.75.5 1.25.875 1 1 1.875 1.75.75.5 1.5.625.375.125.75 3 .75.25.75.25-.25.75-.625 1.25-.875.75-1.375 1.25-1.125 1-1.125 1.5.625.5 2 1.5 1.375-.5 1.375-.5.625-.375 2.25-.25 1.375-.375 1.375-.375.75-.875 1.75-1 .875 0 1.75-.125.875-.5 1.5-1 1.25-.125 1.875-.25 1.875-.25 1.875-.25c2.125-.375.25-.375.375-1.25s1-.875 1-.875.75.125 1.25-.375.75-.75.75-1.375-.625-1.625-.625-1.625-.875-.625-.875-1.375.125-1 .375-1.5 0-1.375 0-2.875 0-1.625.125-2.625.75-.5 1.5-1-.25-1.75-.25-1.75-.5 0-1.625-.375-1.625-.375-2.375-1.875-.375-1.125-.5-1.75-.75-.875-.5-2.375-.993-2.927-.993-2.927l-1.06-.354s-.708-.353-.885-1.06c-.176-.707.177-.884.354-1.945.177-1.06-.53-2.121-.53-2.121l-1.238 1.06s1.768-2.828 1.945-3.712c.177-.884 0-1.06.353-1.768.354-.707.707-.53 1.768-.883 1.06-.354 1.414-1.061 1.414-1.061s.53-1.414.354-2.828c-.177-1.415-.354-1.945-.354-3.182 0-1.238-1.414-.884-1.414-.884l-1.06-1.415s-1.061-.353-1.592-1.237c-.53-.884 0-1.414.177-2.475.177-1.06-.53-1.414-.53-1.414s-.884-2.121-1.238-3.182c-.353-1.06-.176-1.591-.353-2.475-.177-.884.177-1.414.707-2.121.53-.707 1.237-1.768 2.298-2.122 1.06-.353-.353-1.59-.353-1.59s1.237-3.713 1.944-3.713c.707 0 .707 0 3.359-.177 2.652-.176 1.414-.884 1.944-1.59.53-.708 1.768-.531 2.475-.708.707-.177.707 0 1.415 0 .707 0 3.181-.707 3.181-.707s1.591-1.414 2.299-1.768a10.837 10.837 0 0 0 1.414-.884l1.237 1.238 1.414.177s1.591.707 2.475.884c.884.176 1.238.353 2.122.176.884-.176 1.06-.53 1.767-1.944.708-1.414.884-1.768 1.061-3.005.177-1.238 3.359-1.238 4.243-1.591.884-.354 1.06-.707 2.121-1.238 1.06-.53 0-1.59 0-3.359 0-1.767-.53-1.944-.707-3.182-.177-1.237-.53-1.59-.707-2.474-.177-.884 1.59-1.768 2.298-3.182.707-1.415 0-1.945-.177-3.182-.177-1.238-1.768-1.238-1.768-1.238l-3.182-2.121-1.414-.707s-.177-1.414 0-3.005 1.06-2.122 1.768-3.36c.707-1.237.707-2.65.707-3.535 0-.884-1.768-1.237-1.768-1.237v-4.066-4.773c0-1.237-.707-3.536-1.237-4.42-.53-.883.53-2.474.53-2.474s-.884-1.945-1.06-2.829c-.177-.884 1.06-4.773 1.06-4.773l1.945-4.773 1.237-2.121s0-3.182.53-3.89c.53-.706.354-4.065.354-4.065s-.707-6.717-1.414-7.16c-.707-.441-.972-.972-1.68-1.856-.707-.883-2.032-.088-3.005-.088-.972 0-1.944-.088-3.005-.265-1.06-.177-1.326-.442-2.652-.707-1.325-.265-2.21.884-2.563 1.59-.353.708-.707.973-1.768 2.564-1.06 1.591-1.149.354-2.475.972-1.325.619-1.237-.884-2.21-1.237-.971-.354-2.209.353-3.27.353-1.06 0-.972-.265-2.298-1.149s-1.326-.53-3.182 1.238c-1.856 1.768-1.679 1.149-3.005.884-1.326-.265-1.944 1.237-1.944 1.237s-2.387 2.298-3.006 2.652c-.618.353-3.093 1.06-3.977 2.298-.884 1.237-.177.795-1.856 1.68-1.68.883-1.326.088-1.326-.973 0-1.06 0-.442.619-1.856.618-1.414 0-.619-.62-.884-.618-.265-1.06-.796-1.678-1.68-.62-.883-.62-1.237-1.326-1.944-.707-.707-2.122.796-3.359.619-1.237-.177-1.15 0-2.033.088-.884.089-.088.796.177 1.591.265.796.442.707 1.06 1.414.62.707-.088 1.945-.088 2.652 0 .707-.177.795.088 1.591.266.795.708.53 1.591 1.149.884.619.53.972.354 1.768-.177.795-.972-.089-1.945-.177-.972-.088-1.59 1.326-2.563 1.856-.972.53-1.414.354-2.386.442-.973.089-.796.619-2.387 2.121-1.59 1.503-1.68.62-2.828.62-1.15 0-.707-.62-2.033-1.503-1.326-.884-.619.088-1.591.441-.972.354.088 1.061.707 2.033.619.973.795 1.68.972 2.033.177.354 0 .442-1.414 1.945-1.414 1.502-1.06.088-2.121.088-1.06 0-.796.089-1.856.177-1.061.088-.708-.442-.708-1.149v-2.121c0-1.503-.53-1.15-.795-1.503s0-.795-.177-1.237c-.177-.442-.884-1.061-1.326-1.061-.442 0-1.679.088-1.944-.265a4.122 4.122 0 0 0-1.591-1.238c-.796-.353-1.68-1.237-2.033-1.59-.354-.354 0-.796.088-1.238.089-.442 1.68-1.06 3.005-.884 1.326.177 4.155.53 6.364.53h4.155c.884 0 3.005-.442 4.154-.707 1.149-.265 2.652-1.06 3.182-1.68.53-.618.177-.795.088-1.944-.088-1.149-.442-1.59-1.237-2.298-.796-.707-.707-1.149-4.066-3.358-3.359-2.21-3.182-.708-4.508-.62-1.326.09-1.149-.53-2.121-.795s-3.005-.176-4.685-.176c-1.679 0-1.767.265-3.093-.089-1.326-.353-.707-.795-1.856-.884-1.15-.088-1.415.177-2.387-.177-.972-.353-1.237-.883-1.944-1.149-.708-.265.265.177-.973.089z"
        className="land europe"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "ukraine").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12959)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "ukraine").owner ? `#ukraine_${phase}_modal` : null}
      />
      <path
        id="southern_europe"
        d="M567 303.313c.25-.063.5-.813.75-1.188s1.188-.438 1.188-.438 1.625-.062 2.312.375c.688.438.25.75.313 2.063.062 1.313.062 1.063.25 1.688.187.625.5.375 1.625.687 1.125.313.75.188 1.625.313s.687.75 1.125 1.687c.437.938.5 1.625.937 2.438.438.812.438 1.312.438 1.562s-.313 1.5-.375 2.188c-.063.687-.375.812-.5 1.125-.125.312-.063 1.187-.063 1.5 0 .312.438.75.813 1.187.375.438.375.813.375 1.5 0 .688-.563 1.75-.563 2.375s.938 1.063.813 1.625c-.125.563 2.187 2.25 2.187 2.25s-1.125.75-.625 1.5 1.125 1.375.875 1.875-.125.5-.75 1-1 .375-1 1.5.875 1.375.25 2.375-.375.875-.875 1.625-.75 1.375-1 2.125.5.875-.375 1.625-1.125.375-1.375 1.25.125.875-.375 1.5-.5 1-1 1.375-.5.25-1.125 1-.125 1.125-.625 1.75-.875.125-1.125 1 0 .5.125 1.375.75.875 0 1.875-1.125 1.625-1.625 2-.5-.125-.875 1 .25 1.5-.5 1.75-1.125.25-1.875.375-1.125-.125-1.625 0-.75 0-1.125.625-.75.5-.25 1.25.375.75.875 1.25l1.375 1.375c.5.5.875.75 1 1.375a6.38 6.38 0 0 1 .125 1.125s.625 1.875.125 2.125-1 .25-1.125 1-.25.5 0 1.375 0 .875.5 1.375.625.5 1.375 1.25 1.625.875 1.125 1.5-1.125.75-1.875.5-1.125.375-1.625-.75-.75-1.375-.75-1.375-.75.125-.75.75 1.875.75-.5.75-2.125.75-2.75 0-.125-1-1-1.25-1 .5-1.375-.25-.5-.75-.5-1.875.625-1.125.25-2.625-.625-1.125-.875-2 0-.875 0-2-.375-1.625-.375-1.625-.375-.25-.625-1.5-.125-1.375-.375-2.5-.125-1.5-.75-1.5-.25.5-1.25-.25-.5-1-1.375-1.375-1 .375-1.25-.875-.25-.625-.25-2.125v-2.625c0-.625.5-.625-.25-1.625s-.625-1.25-1.5-1.375-.625.875-1.375-.375-.875-2-1.875-2.25-.875.375-1.375-.25-.25-.75-.875-1.375.125-.875-1.5-.875-1.625-.875-2.5-.5-1.125 1-1.125 1.625 0 .625.125 1.5-.125 1.375.5 1.5.625-.5.75.625-.125 2.25 1.375 1.625 2.375-1.5 2.5-.75-.125.875.125 1.875 0 1.875.875 2.5 1.25.625 1.625 1.125.25.375.75.625.5 1.375 1.125 2.25 1.375.125 1 1.25-.375 1.625-.875 2-1.625.75-2.375.125-1.375-1.125-1.375-1.125.625-1.25-.875-.875-1.5.5-2.125.5-1-1-.75.375 1.25 1.875 1.25 1.875 1.125 0 1 1.25.375.875-.25 2.125-.5 1-1 2.125 0 1.125-.625 2-.875 1.375-1.75 1.75-.875-.375-1.25 1-.25 1.375-.875 1.625-2 .25-2.5.625.375.875-1 .5-1-.375-1.625-.5-.875-.125-1.375-.75-.125-1.75-.625-1.375-.875 1.75-1.375.375-.375-1.5-.875-1.75-.75 1.25-.875-.375-.375-1.625.375-2.375 1-1 1.625-1 .75.125 1.5.25.625.75 1.25.875 2.5-1 2.75-.25-.25 3 .375 1 .25-2.375 1.125-3.125 1.75-1.5 2.125-2 .75-1.25-.125-2.125-1.125 0-1.125-1.625.25-2-.25-2.875 0-.625-1-1.125-1-.75-1.5-1.375-1.375-1.125-2.25-1.375-.25.375-1.125-1-1.125-1.75-1.875-1.625-.375 1.125-1.125.25-.5-1-1-1.375-.75 0-1.375-.5-.625-.5-.75-1.5.125-1.375-.5-1.875-1.875-.875-1.875-.875.25-.25-1.375 0-1.75.25-2.25.625c0 0 2.424-.851.833-2.266-1.59-1.414-2.298-3.182-1.59-3.358.706-.177 1.59-.884 1.767-1.591.177-.707.442-2.122.088-2.564-.353-.442-2.21-1.679-2.21-1.679s-1.06-.884-.883-1.237c.177-.354 1.06-1.326 1.06-1.326s1.061.177 1.061-1.326c0-1.503 0-2.298-.353-3.182-.354-.884-.442-1.591.176-2.21.62-.618 1.326-1.59 1.503-1.944.177-.354.177-.973 1.326-.796 1.149.177 1.414-.088 2.21-.442.795-.353 1.59-1.326 1.59-1.326s1.326-.176 1.326.266.884 3.005 1.768 2.651c.884-.353 2.563-.795 3.359-1.237.795-.442.707-.884 1.768-.796 1.06.089 1.237.265 2.386-.088 1.15-.354 1.768-.442 2.298-1.15.53-.706 2.387-2.297 2.387-3.181v-2.033s3.8-.53 4.684-.619c.884-.088 1.768-.088 2.298-.442.53-.353.53-1.06.973-1.149.442-.088 1.856.177 1.856.177s0 .265.442.354c.442.088 1.326 1.06 1.149 1.856-.177.795-.707 1.68-.884 2.033-.177.353-.619 1.502-.53 1.856.088.353 1.06 1.768 1.06 1.768v3.889h9.193s.707-1.503.618-2.21c-.088-.707-.883-1.768-.883-2.121 0-.354.176-3.182.176-3.182s.53-2.917 1.856-3.801c1.326-.884 2.122-1.237 2.21-1.68.089-.441.265-1.325.707-1.502.442-.177 1.15-.884 1.15-.884s-.266 0 .43-1.09z"
        className="land europe"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "southern_europe").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12963)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "southern_europe").owner ? `#southern_europe_${phase}_modal` : null}
      />
      <path
        id="western_europe"
        d="M521.403 317.396c-1.15-.177-1.15.442-1.326.796-.177.353-.884 1.326-1.503 1.944-.618.619-.53 1.326-.176 2.21.353.884.353 1.68.353 3.182 0 1.503-1.06 1.326-1.06 1.326s-.884.972-1.061 1.326c-.177.353.884 1.237.884 1.237s1.856 1.237 2.21 1.68c.353.441.088 1.856-.089 2.563-.177.707-1.06 1.414-1.768 1.59-.707.177 0 1.945 1.591 3.36 1.591 1.414.581 1.735.581 1.735s-.914.155-1.414.53c-.5.375-.125.375-.625 1s-.375.75-1.25 1-.125.75-1 .625-.75.25-1.25-.25-.125-1.125-1-1.125-1.25.125-.875-.625.875-.75-.125-.75-.875.25-2.125 0-1.75-.125-2.25-.125l-1.375 2.5s.125.5 0 1.125-.625 1.125-.625 1.125-.375.375-.375 1.125.25.875-.5 1.625-.75 1-1.25 1.25-.5.125-.875.625-.625.5-.875 1.125-.25.625.125 1.25a8.02 8.02 0 0 1 .625 1.375s.375.125.125 1.25-.375 1.875-.375 1.875 0 .5.125 1.5 1 2.125 1 2.125l.625.875s.375 1.5.5 2.25 1.25.5.125 1.5-2.75 1.625-3.875 3.5-.75 3.375-1.625 4.375-.125 1.125-1.25 1.125-2.125-1.25-2.75 0-1 2.375-1.875 2.5-1-1.375-1 .375-.375 2.875-.375 2.875-.25.875-1.125.75-1-.25-1.75-.375-.75.375-1.375-.375-.75-1.125-1-1.75-.25-.875-1.25-1-1 .25-1.5-.625-.75-1.125-1.5-1-.75.625-1.75-.375-1-1.75-1.5-1.625-1.125 1-1.125 1 .125.5-1.375.375-1.75-.375-2.875-.375-1.25.75-2.25.25-1.125-.625-1.125-1.25.125-1.5-.375-2 .125-1.125-.625-1.5-.375-.25-1.25-.25-.875.125-1.75-.375-1.25.25-.875-1.125.125-1.25.75-2.25.625-1 1-2.125.5-1.375 1.125-3 .875-1.125.875-2.375-.5-1.25.25-2.125.875-.875.75-1.875.25-.75-.25-1.5-1.75-1.875-2.25-2.375-.375.125-.625-1.375-.75-1.25-1-2.125-.25-.875-.25-2-.875-.75-.875-1.375-.375-1.125.5-1.625 1-.125 2.125-1.125 1.125-.75 1.375-1.625 1.125-1.375 1.125-1.375-.125.125.625.875.875.75 1 1.25-.375.625 1.125 1 1.125.5 2.625.5 1.875.125 2.5-.125 1.25-.625 1.25-.625.5-.375 1.375-.375 1-.125 1.75.125.125.375.875.25.875.125 1.5-.25 1 .25 1.375-.875 0-1.5 1-2.25 1.375-1 2.375-1-.625-1.625-1.25-1.75-1 .5-1-.125-.125-.75.25-1.75 1.125-1.625 1.125-1.625-.125-.5-.25-1.375 1.625-1.375.5-2.125-1.625-1.125-2.375-1.125-.625 1.25-1.25-.25-.125-1.75-.75-2.5-.875-.5-1.5-1.375.25-.75-1.125-1.75-2.25-1.25-2.875-1.25-.875.875-.75-.375.125-1.625 1-2.375 3.125-1.375 4-1.5-.5-.5 1.375-.125 1.25.375 2.125.5 2.5.625 2.5.625.25-1.875.75-2.5.625-.625 1-1.625.5-1.125 1.75-1.5 2.125.625 2.125.625-1.625 1.625-.375 1-.375-2.625 2.375-2.25 3.75 2 4.125.125 0-1.875.625-2.875.625-1 1.75-1.625.875-2.5 2.25-2.75.875 0 2.125-.25 1.125 0 1.875-.875c0 0 1.188.313 1.125.75-.063.438 1 3.188 1 3.188s1.313.812 2.188 2.062c.875 1.25 1.312 2.375 1.75 2.5.437.125.687.125.812.938.125.812.188.937.563 1.437.375.5.937.438 1.062 1.188s.313 1.562.625 1.937c.313.375 1.25 1.063 1.25 1.063s.813.75.903.583z"
        className="land europe"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "western_europe").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12967)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "western_europe").owner ? `#western_europe_${phase}_modal` : null}
      />
      <path
        id="northern_europe"
        d="m563 263.625 1.25.125c.847.794 1.452 1.717 2.313 2.5 0 0 2.5 1.375 3.375 1.375s1.875-.563 2.375-.625c.5-.063-.063.875-.063 1.188 0 .312.688 3.25 1 3.875.313.625.375 8.062.438 9.437.062 1.375 1.375 2.75 1.75 3.063.375.312.625 1.062.625 1.375 0 .312-.813 1.375-.875 1.812-.063.438.125 1.188.062 1.75-.063.563-.5.813-1 1.25-.5.438-.375 1.438-.688 2.063-.312.625-.812.625-1.437.875-1.685 2.299-2.098 4.337-5 5-.563 0-2.063.437-2.25.937-.188.5-.188 1.5-.188 1.5l2.313 2.188c-.696 1.09-.43 1.09-.43 1.09s-.708.707-1.15.884c-.442.177-.618 1.06-.707 1.503-.088.442-.884.795-2.21 1.679-1.325.884-1.856 3.8-1.856 3.8s-.176 2.83-.176 3.183c0 .353.795 1.414.883 2.121.089.707-.618 2.21-.618 2.21h-9.193v-3.89s-.972-1.414-1.06-1.767c-.089-.354.353-1.503.53-1.856.177-.354.707-1.238.884-2.033.177-.796-.707-1.768-1.15-1.856-.441-.089-.441-.354-.441-.354s-1.414-.265-1.856-.177c-.442.089-.442.796-.973 1.15-.53.353-1.414.353-2.298.441-.884.089-4.684.619-4.684.619v2.033c0 .884-1.856 2.475-2.387 3.182-.53.707-1.149.795-2.298 1.149-1.149.353-1.326.177-2.386.088-1.061-.088-.973.354-1.768.796-.796.442-2.475.884-3.359 1.237-.884.354-1.768-2.21-1.768-2.651 0-.442-1.325-.266-1.325-.266s-.796.973-1.591 1.326c-.796.354-1.061.619-2.21.442-1.15-.177-.903-.584-.903-.584s-.938-.687-1.25-1.062c-.313-.375-.5-1.188-.625-1.938s-.688-.687-1.063-1.187-.437-.625-.562-1.438c-.125-.812-.375-.812-.813-.937-.437-.125-.875-1.25-1.75-2.5s-2.187-2.063-2.187-2.063-1.063-2.75-1-3.187c.063-.438-1.125-.75-1.125-.75.75-.875 1.375-3.125 2-3.375s1 .375 1.375-1.625-.25-1.625.375-2.125 1.375.125 1.75-1.25.25-1.625.25-2.25-1.75-.625.625-1.125 2.5.25 3-.75.5-.75.75-1.75.75-.75 1.375-1.75.25-1 .625-1.875.375-4.125 1-4.375.625.5 1-.5 0-1.25.75-2.25.875-.875 1.625-1.375.875-.375 1.125-1-.875-.5.875-1.75 1.625-.75 1.875-1.375.5-1 .625-1.625 0-.625.125-1.5 0-.25.125-1.75.375-2.5.5-3.125.25-1-.375-.875-.75 1.125-.875 0-.375-1.5-.625-2.125-.625-1.75-.625-1.75-.5-.5 0-1.25 1.125-1.875 1.125-1.875.375-.375 1-.5.75.125 1.25-.5-.5-.75.75-.875 1.5-.125 1.5-.125l-.75 1.125-.125 1s1.375.75 1.625 2.25.5 1.625.375 2.375-.25 3.75-.25 3.75 0 1 .75 1.625 1.25.875 2 1 2.125.25 2.75 0 1.25-.375 1.875 0 1.375 0 1.875-.25 1.125-.5 1.75-.625 1.125-.125 2.375-.125 1.625.25 2.125-.25.375-.125 1-.625 1.875-1.125 2.5-1.125.625-.125 1.375-.25 1.75-.625 2.75-.25 1.375.5 2.25.625 1.25.375 1.75 0z"
        className="land europe"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "northern_europe").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12971)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "northern_europe").owner ? `#northern_europe_${phase}_modal` : null}
      />
      <path
        id="egypt"
        d="M575.585 429.296c-.177-.884-3.89.177-4.773-.177-.884-.353-1.414-1.06-1.414-1.06s-.707-2.122-.884-3.183c-.177-1.06-2.652.177-3.536 0-.884-.176-.176-1.414-.53-2.651-.354-1.238-1.768-.707-2.652-.707-.884 0-2.298-.707-3.535-1.591-1.238-.884-1.591.353-3.005.53-1.415.177-1.415-.177-1.945-1.06-.53-.885-2.298.53-3.889.353-1.591-.177-1.237-.884-2.121-2.298-.884-1.414-1.768-.354-3.713-.884-1.944-.53-1.237-.707-1.414-2.121-.177-1.415-1.414-1.238-1.414-1.238s-.177-1.59-.354-2.828c-.176-1.238.177-3.182.177-3.89 0-.706-.353-3.358-1.59-3.888-1.238-.53-.354-1.768-.354-1.768s-.53-1.768-.354-2.652c.177-.884 1.414-1.944 2.298-1.944.884 0 1.414-1.061 1.414-1.061s-1.414-2.121-2.121-3.359c-.707-1.237 1.237-1.06 1.237-1.06l.884-1.061s.354-.53 1.945-1.414c1.59-.884.683-2.909.683-2.909s1.625.125 3.25.375 1.375 1 2.375 2 1.375 1.25 3.5 2 2.25 1.125 3.625 1.125 3.625-1.25 4.5-1.625 2.375-.5 8.375-.875 6 3.5 7.375 3 2.875 0 3.625.25 2.875 1 4.125 1 2.625.75 3.125 1 6.25 1.5 6.875 1.5l1.625-1.5 1.25.375s1 .5 1.5.5.75-.875.75-.875l2-1.25 2.25 4.375s-1 2.625-1 3.375-.125 2.625-.625 2.75-1.125-.125-1.875-.625-1.5-1.875-2.625-2.625 0 2.5 0 2.5c-.125.5 2.375 3.875 6.75 9.875s.5 3 1.375 4.5 1.75 2 2 4.25.125 1.125.5 2.25l-.25-.25c.125 1.625-27.25 0-28.875.5s-1.25 5.25-1.875 5-2.665 1.046-2.665 1.046z"
        className="land africa"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "egypt").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12975)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "egypt").owner ? `#egypt_${phase}_modal` : null}
      />
      <path
        id="east_africa"
        d="M575.055 454.752s-.53-2.122-1.415-3.36c-.884-1.236-.353-2.65-.353-3.535 0-.883.353-1.414.884-2.12.53-.708.176-1.062.176-1.062l.884-1.767s.53-1.415.53-2.652-.706-.707-1.414-.884c-.707-.177-.176-.353.884-.884 1.061-.53.707-1.768.884-2.828.177-1.06-.353-5.48-.53-6.364 0 0 2.04-1.296 2.665-1.046s.25-4.5 1.875-5 29 1.125 28.875-.5l.25.25c.375 1.125 1.25 1 1.25 1s2 1.5 2.25 2.25.5.25.5.875.375 2.875.875 4.375.625.75 1.625 1.625.25.75.25 2.75 1 1.5 2 3.125.125.875.625 2.25.625 2 1.125 3 .75.75 1.375.75.75.375.75 1.875 2.375 2 3.375 3.5 1.125 1 1.75 2 0 .75-.625 2.875.125 2.25.75 3.25 4 .875 4 .875 3-.25 4.125-.875 1-.875 1.5-1.25 4 0 6.5-.625 5.75-3 7.25-.375-3.75 13-6 18-8.5 10-12.375 13.75-6.25 8.375-6.5 8.875-1.25 1.5-1.75 1.75-1 .625-2 1.875-1.625.75-3 1.75-1.125 2-1.125 2.75-.375 2.375-.75 2.875.5 3 .5 3.875-.25 2.875-.25 2.875 0 .375 1.375 1.125.5 5.25.5 5.25l.25.5s-1.625 1.625-2.75 1.625S614 524.5 614 524.5s-.625.125-1.875.5-2.25.25-3.375 1.75-.5 1.375.375 4.25-.375 1.125-.75 2.125 0 3.125 0 4.375-.875 1.75-1.5 2.25-2.625-1.5-3.375-2.75 0-3.25.5-4.75-1.125-3.625-1.5-4.875-.25-1.375.375-2.5.125-.875-.25-2.625-1.375-1.625-1.75-2.375-1.5-2.25-2.5-2.25-.5-1.625-.75-2.5-2-.5-2.625-.25-.75-.625-1.125-3.375-1.125-9.75-1-10.875 2.875 1 3.375.25.625-6.375.375-7.875 2.125-.875 3.625-1 1.75-2 2.375-3.25 1.25-1.125 1.875-1.375.5-1.5 1.25-2.5 1.75-2.75 1.75-4.125-1.875-2.75-4.125-2.875-1.75 1-4.875.25-3.75-.625-4.75-.875-.875-1.875-2-2.25-2.5 2.125-2.5 2.125-1.25-.375-2.5-3.375-3-3.875-3.5-4-.625-3.625-.625-4.25-2.25-1.375-2.75-2.125-.875-1.875-1.75-2.125-1.5-.25-1.875-2.375-1.195-4.123-1.195-4.123z"
        className="land africa"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "east_africa").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12979)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "east_africa").owner ? `#east_africa_${phase}_modal` : null}
      />
      <path
        id="congo"
        d="M595 514.875c-.625.25-.75-.625-1.125-3.375s-1.125-9.75-1-10.875 2.875 1 3.375.25.625-6.375.375-7.875 2.125-.875 3.625-1 1.75-2 2.375-3.25 1.25-1.125 1.875-1.375.5-1.5 1.25-2.5 1.75-2.75 1.75-4.125-1.875-2.75-4.125-2.875-1.75 1-4.875.25-3.75-.625-4.75-.875-.875-1.875-2-2.25-2.5 2.125-2.5 2.125-1.25-.375-2.5-3.375-3-3.875-3.5-4-.625-3.625-.625-4.25-2.25-1.375-2.75-2.125-.875-1.875-1.75-2.125-1.5-.25-1.875-2.375c0 0-.5-3.625-1.16-4-.035-.123-2.334 2.352-2.334 3.235 0 .884.53 1.945-1.767 3.006-2.298 1.06-3.713 1.767-5.127 2.298-1.414.53-1.944 1.59-2.828 2.121-.884.53-2.122.53-3.005 1.238-.884.707-1.591.707-2.122 1.767-.53 1.06-1.237-.707-1.414 1.768-.177 2.475.354 3.712.354 3.712s1.59-1.944 1.237 1.945c-.354 3.889-1.237 4.243-.707 5.657.53 1.414.884 1.768-.53 2.651-1.415.884-2.652 0-2.652 0s-.354-1.59-1.945-1.237c-1.59.354-1.767 1.06-3.358.707-1.591-.353-3.182-.353-3.182-.353s-1.945 1.59-2.652 1.237c-.707-.354-.707-.884-1.237-1.945l-.634-.182c-1.062-.375-1.187 2.125-1.187 2.125.375 1.125 1.375 1.625.875 2.125s-1.125 2-1.75 2.875-3.25 2.125-2.25 3.25 7.625 6.375 9 9.5l1.25 1.75c.625.875 2.875-1 3.625-.375s2.75 2 3.5 2.375 4.875-.25 5.875.5 1.75.375 1.75.375-.625 4.25 0 4.875 2.125 1.375 3 .125 7.375-2 7.75-1-.625 3 .625 4 2.125 1.75 2 2.75-1.375 2-.875 3.375 1.875 1.875 3.375 1.75 1.375 1 2.625 1.25 6.125.25 6.625.625 1.75 1.25 2.125 1.875 1.75 2.875 2.625 2 1.875-5.5.5-6-2.25-.5-2.25-2 .75-4.125 1.25-4.125 1.125-.625 1.125-.625 3.875 0 2.625-1z"
        className="land africa"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "congo").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12983)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "congo").owner ? `#congo_${phase}_modal` : null}
      />
      <path
        id="south_africa"
        d="M547.125 504.125c.625.875 2.875-1 3.625-.375s2.75 2 3.5 2.375 4.875-.25 5.875.5 1.75.375 1.75.375-.625 4.25 0 4.875 2.125 1.375 3 .125 7.375-2 7.75-1-.625 3 .625 4 2.125 1.75 2 2.75-1.375 2-.875 3.375 1.875 1.875 3.375 1.75 1.375 1 2.625 1.25 6.125.25 6.625.625 1.75 1.25 2.125 1.875 1.75 2.875 2.625 2 1.875-5.5.5-6-2.25-.5-2.25-2 .75-4.125 1.25-4.125 1.125-.625 1.125-.625 3.875 0 2.625-1c.625-.25 2.375-.625 2.625.25s-.25 2.5.75 2.5 2.125 1.5 2.5 2.25 1.375.625 1.75 2.375.875 1.5.25 2.625-.75 1.25-.375 2.5 2 3.375 1.5 4.875-1.25 3.5-.5 4.75 2.75 3.25 3.375 2.75 1.5-1 1.5-2.25-.375-3.375 0-4.375 1.625.75.75-2.125-1.5-2.75-.375-4.25 2.125-1.375 3.375-1.75 1.875-.5 1.875-.5 1.5-1.375 2.625-1.375 2.75-1.625 2.75-1.625l-.25-.5s2.875-.875 2.375.125.875 4.625.875 4.625.125.75.375 1.75.125 1.125.25 2.125-.375 1.5-.5 2.25.125 1.375.25 2.375-.625 3.25-.875 3.875-1 .625-1.5 1.125-.625 1.25-1.75 2.375-.875 1.125-1.625 2.25-.125.5-1.25 2.25-.625.5-1.75.875-1.75 1.625-2.25 1.75-1.875 1.375-2.625 6 .75 5.5.375 6.375-2.75 4.25-3.125 5.25-.75.875-1.875 1.375-.75 2.5-.75 3.25-.75 3.25-2.125 4.5-.125 1.125.25 1.625.375 1.125.125 2.75-1.625.75-2.375 1.25-3.125 3.25-2.875 4.25 1.25.875 1.25.875-1.625 1.75-3.125 3.625.125 1.125.5 2.375-.875.25-1.625.25-.875.375-1.625 1-1.25.5-4.75 1.25-1.375 1.25-3.125 2.5-1.625 1.625-6.5 1.625-3.25.5-4.125.875-1.5.375-2.5.375-1.75.5-2.375.875-1.125 1.375-1.125 1.375-.5-.25-1-1.125-1.625-.5-2.5-.625-1-.25-1.875-1.375.25-1.5.25-2.125-.75-2.625-.75-3.625v-2.75c0-1.25-.125-1.25-.125-2.625s0-1.5-.375-2.25-1.375-1.625-1.625-3 0-1.875 0-3-1.25-.5-1.5-1-.875-1-1.375-2.5.125-1.375.125-2.625v-2.375c0-1-.75-1.375-1-2s-1.75-3.25-1.875-4.125-.25-1.375-.25-2.5.125-1 .25-1.875-.625-1.375-.625-2-3.25-3.75-3.25-3.75-.375-.25-.5-1-.75-1.25-1.875-2.625-.625-1.375-.5-2.375-.125-2-.25-2.625-1.375-3.375-1.375-3.375-.125-1.25.125-2.25.625-1.25.75-2.75 0-1.125.125-2 .25-.875.625-1.625 1-1.375 1-2.5.75-2.125 1-2.625.75-1 1.5-2.125-.375-.75-.25-1.75-.125-1.75-.25-2.5-2-3.125-2.5-4.5 1.75-2.75 3.5-5.5h.063c2-2.938-4.188-7.688-4.188-8.875z"
        className="land africa"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "south_africa").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12987)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "south_africa").owner ? `#south_africa_${phase}_modal` : null}
      />
      <path
        id="brazil"
        d="M404.375 403.625s-4.33 3.574-4.86 4.634c-.53 1.061-.884 3.36-2.121 3.536-1.237.177-8.662.53-8.662.53s.354 2.122-.707 2.122c-1.06 0-11.49-.354-11.49-.354l-1.415-4.243s-1.237.884-1.414-.883c-.177-1.768-.177-4.597-.177-4.597s-2.651 1.415-4.242 1.945c-1.591.53-3.006 3.182-4.42 2.652-1.414-.53-2.121-2.299-2.475-.884-.353 1.414.177 5.656-.884 6.01-1.06.354-1.414-.265-2.298.796-.884 1.06-3.27 1.325-3.977.707-.707-.62-1.238-1.326-2.033-1.591-.796-.265-1.238-.707-2.121-.796-.884-.088-1.061-.53-1.768.265-.707.796-2.21 2.122-2.475 2.829-.265.707-1.68 3.27-1.326 4.242.354.973 1.768.708 1.768 2.475 0 1.768-.53 2.652-1.503 2.917-.972.265-5.833 1.856-5.833 1.856s-4.067-.043-4.192.582.125 4.5-.875 5.25S331.125 434 331 435s-2.125 1.625-1.375 3 2.125 2.625 3.125 2.625 2.25.125 2.375 1.125 3.625 1.125 5 1.875 4.875-1.125 4.625 1-3.875 2.5-4.125 3.875-.375 4.375 2.375 4.25 5.25-2 7.125-2.375 3.75-.375 4.25-.875.875-1.75 1.875-1.875 3.375 1 4.125 2.25.875 2.375 2.375 2.5 1 1 2.125 1.5 2.125 0 3.125.625 1 2.75 2.625 2.75 3.875-1.125 4.5.125 1.25 3 2 3.75.25 1.75.5 2.5 1.75.875 2.875 1.75 1.25 1.375 1.625 3.125 1.25 1.75 2 3.25 2 4.75 1.75 5.875-1 2.5.5 3.375 2.125 1.375 3 2.75 1.5.875 2.125 1.375 1 2.375 1.375 5 3.25 3.625 3.375 5.375.25 3-.375 3.125-1.875 1.25-2 3-3.375 2.625-3.375 2.625-2.125 1.5-1.875 2.5 5 .25 5 .875-.75 5.125-.25 5.25 3.75-1 4.25-.375-.625 4.5-.375 4.875 3.125 2.5 3.813 1.938c1.312-.438.562-.563.812-1.313s.25-.625.875-1.5.25-.875.5-1.625.625-1.375 1.125-1.875.75-.625 1-1.375.125-1.125.25-2.375 1.625-1.375 3-1.875 1.25-2 1.375-3.25-.375-.375-.375-1.75-.125-1.875-.25-3.25.125-.5.75-1.125.625-3.375 2.125-6.5 12.5-4 13-4.125 3.375-1.125 3.75-1.625 1.625-1.625 2.625-2.125.375-1.375.625-2.5.5-.75 1.125-1 .5-1 1.125-1.875 0-1.75.375-2.5 1.5-1 2.375-1.375.375-1.625 1.125-2.375 0-3.375 0-5 0-1.75.75-2.75-.25-3-.25-3l.25-1.75s-.375-2-.125-3 1.25-1.5 2.75-2.5.5-3.25.5-3.25V449s2.25-1 4-1 1.75-2.5 3.25-4 .75-3 1-4.25c.25.5-.25-.75-.625-1.875s-.125-1.625-.375-3.375-1.25-2.5-2.25-3.5-2.375-.75-3.25-1-1.375-1.875-2.25-2.125-4.25-2.625-6.125-2.875-2-.125-2.875-1.125-1.375-.375-2-.375-1.625.5-2.375 0-1.125-.25-2.25-.25-2.125-.375-2.625-1.25-.5-1-1.25-1.375-1.625-.125-2.375-.5-1.625-.75-2.375-.875-1.625.125-2.375 0-2.5-.5-3.125-.5-2.5.375-3.375.375-2.375-1.5-3.625-2 1.125-.125 3-2.375-.75-3.625-1.25-4.5-.625-1.625-1.375-4.25-1-2.375-1-2.375z"
        className="land south-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "brazil").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12991)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "brazil").owner ? `#brazil_${phase}_modal` : null}
      />
      <path
        id="argentina"
        d="M396.25 495.5c.125 1.75.25 3-.375 3.125s-1.875 1.25-2 3-3.375 2.625-3.375 2.625-2.125 1.5-1.875 2.5 5 .25 5 .875-.75 5.125-.25 5.25 3.75-1 4.25-.375-.625 4.5-.375 4.875 3.125 2.5 3.781 1.906c-1.406.344-4.656 1.844-4.031 2.719.625.875 1.5 1.125 0 1.5s-1.25.25-2.75.5-1.25.125-2.875.5-1.875.875-2.875 1-1.5-.125-2.125-.125-1.125 0-1.125.625-.125.75.5 1.25 2.375 1 2.5 1.5.125.875.125 1.75.125 1 .625 1.125.625.25.75.75-1.25 2.25-2 2.75-1.375 1.125-3.125 1.25-1.375-.125-2.5.5-1.125.75-2.375.75-1.625 0-2.875.25-2.125.5-2.125.5.5.75.625 1.5.75.875.25 2-1.375 1.625-1.75 2.125-.375.25-.375 1.25l-2.625.375s-.875-.75-1.125.375 1 2.125 1 2.125-1.75 2.625-1.5 3.25.875 1.625.625 2.125-.125.75-.75 1.25-.125 1-.5 1.5-.75 1.25-1.625 1.625-1.125 1-1.125 1L365.25 560s-.5.625.125 1.375 1.25.25.875 1.625-.25 1.75-.25 1.75 1.25-1.375 1.125 2.375-.75 4.625-.75 4.625-.625-.125-.375 1 .75 2.125.125 2.75-.5-.375-1.5 1.625 0 4.75.625 5.375 1.125.75 1 2-.75 1.375-.25 2.25 2.125 1.5 2.375 2.375-.25 1.5.25 2.125a8.226 8.226 0 0 0 1.125 1.125s-.25 1-.25 2.125-.5 1-.5 2 0 2.25.5 1 .375-1.25.875-1.75 2.125-.5 2.625-.5 1-.75 1.875-.375 1 0 1.5 1.25.25 1.5 1.25 1.75 1.875.125 2.875.125 1.25-.75 1.5.375 1.75 1.5.25 2-1.75 0-3.25.5-1.5.5-2 .625-.5.5-1.375.875-.375.75-2 .375-1 .125-2.125-.625-1.625-1.125-1.625-1.625-.75-1-.75-1l-2.875-2.5h-3.375c-.75 0-1.25-.625-1.25-.625l-1.75.063s-.438-.438-.188-1c.25-.563.25-.563-.062-.625-.313-.063-1.188-.125-1.75-.313-.563-.188 0-1-.125-1.25s-1.313-.25-1.938-.313c-.625-.062-1.5-.375-2-1s-.375-.812-1.437-1.687c-1.063-.875-.75-1-1.688-1.313-.937-.312-1.25-.25-1.437-1-.188-.75-.938-.875-1.25-1.625-.313-.75 0-1.25-.875-1.812-.875-.563-1.063-.125-1.188-1.313-.125-1.187.188-1.75-.125-2.375-.312-.625-.125-.125-.625-.875s-.75-.875-.937-1.75c-.188-.875-.188-1.312-.5-1.875-.313-.562-.875-.812-.938-1.437-.062-.625-.062-.875-.062-1.438 0-.562.188-1-.125-2.25s-.125-1.562-.75-2.312c-.625-.75-.688-.25-1.188-1.875s-1.062-1.875-.75-2.688c.313-.812.5-.937.563-1.562.063-.625.438-.5.5-1.375.063-.875.063-.625.063-1.813 0-1.187-.75.313.125-2.937s.875-3.125.937-3.875c.063-.75 1.25-.875.813-2.188-.438-1.312-.688-1.312-.563-2.187.125-.875.625-1.25.5-1.688-.125-.437.063-.25-.125-.75s.5-.25-.313-.875c-.812-.625-1.062-.5-1.187-1.437-.125-.938-.125-1.688-.063-5.375.063-3.688-.187-3.938.438-5 .625-1.063.938-1.188.938-2.063 0-.875.5-2 .125-3.062-.375-1.063-.688-1.188-.313-1.813.375-.625.688-.625.688-1.375s0 .313.062-1.312c.063-1.625-.438-.438.188-2.563.625-2.125.875-4.25.937-5.312.063-1.063.125-1.375-.188-2-.312-.625-.75-3.625-.75-4.625s.188-.75.438-1.75.313-1.188.25-1.5c-.063-.313 0-.625.188-1.438.187-.812-.188-2.5.5-4.25.687-1.75.875-1.062.687-2.312-.188-1.25-1.625-3.25-1.188-4.625.438-1.375.875-1.125.813-2.938-.063-1.812-.25-4.25.188-5.25.437-1 .687-4.437.5-5.25l.187-.062c.375-2.875-1.125-5.375-1.125-5.375s1.5-1.625 2.375-1.875 1 1.625.75 2.625.125 2 1.25 3.125 2.375 2.375 2.875 3.25 1.75 1.625 2 2.625.625 2 1.875 3 2-.125 2.25-.875-.125-2.5.125-4.25 2.5.25 2.5.25.875 1.875 1.25 2.5 2 .375 2.75-.375 1.25-.625 1.75-.625 1.5 1 3.25.75 1.875-.375 3.375 1 .25 2.125 1.625 3 1.375 0 2.25.375.375 1.5 1.75 2.375 5 .125 6.25.625 0 1.625 0 2.5 0 3.25-.625 3.5-1.5 2-1.375 3.375 3.375 0 4.75-.625 2-.5 3.375-1.75 5.125-3.375 5.125-3.375z"
        className="land south-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "argentina").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12995)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "argentina").owner ? `#argentina_${phase}_modal` : null}
      />
      <path
        id="eastern_united_states"
        d="m326.241 264.275 6.276.088c.707.354.354 5.303.354 5.303s3.358-1.767 5.833-1.06c2.475.707 4.773-3.182 5.303-.884.53 2.298 1.768 4.243 2.299 4.95.53.707.707 1.767 1.767 4.596 1.061 2.828 1.591 5.657.884 6.894-.707 1.238-2.651 3.005-1.06 3.89 1.59.883 3.005 2.297 3.889 3.181.884.884 4.95-2.298 4.773-3.535-.177-1.238-.708-2.122.176-2.475.884-.354 2.298.177 3.006-.707.707-.884 1.944-2.475 3.005-2.298 1.06.176 3.535-.707 3.535-.707s1.768-.53 1.768-1.415c0 0 10.253-.265 11.844-1.237 1.591-.972 1.768-.796 1.768-.796s-.707-3.889-.354-4.154c.354-.265 1.15-.53 1.856-1.237.708-.707 1.783-.753 2.756-.576.972.177 4.492 2.255 4.05 4.2-.442 1.944-1.944 5.568-.353 5.656 1.59.089 2.828-.088 3.093.973.266 1.06.53 1.856 1.061 2.033.53.176 2.387-.53 2.355-.833-.032-.302-.75 1.063-1.438 2.313-.687 1.25-1.687 2.187-1.687 2.187-2.125.875-2.5 3.625-3.25 2.5s-1.75-1.125-.875-2.75 1.5-1.375 1.25-2.875.75-1.625-.5-1.75-.625-.125-2.125.375-1.375-1.125-2.625.875-1.625 1.875-2.5 2.375-.5 1.125-1.125 1.875-.875 1.125-1.375 1.75-.625.625-.625 2 1.125 3.625 1.125 3.625-.625 1.75-1.375 2.125-.875-.875-4.125 2.875-2.875 4.125-4.875 5-1.75 1-1.875 1.5-1.5 1.125-.75 2.25 0 1.375 1.125 1.875 2.25-.5 2.125 1.125-1.375 3.25-3.375 4.5-4.625 5.125-7.25 5.75-3.75 1.5-3.625 2.75 0 2.75-1.375 2.75-.5.625-.5 3.625.25 3.875.875 5 .875 1.125.875 2.875 0 3-.125 3.5 1 .375-.875 1.5-3.5 1.75-4.25-.125-2.25-1.375-2.375-2.875.5-5.125.5-5.125-1.875-.5-2.125-1.5-1-3.375-1.5-3.75-1.5-1.25-2.5-.75-2.75 1.5-3.375 1.375S340.5 333 337 332s-5.125-1.5-6.625-1.625-5-.125-5.625 0-6.625 1.5-7.375 1.5-6 1.25-7.375 2.375-1.25 3-2.75 3.625-2 .875-2 .875-1.5 1.75-1.625 2.75-1.375 2.75-2 3.125-.75.25-.375 1.375c0 0-2-1.25-2-2.125s1.5-2 1.875-3.625 1.125-3.125 1.125-4-.125-3.5-.125-3.5-1.25-4.625-.875-5.375-1.375-1-1.375-1-.625-1.875-.125-2.5 2.375-.625 2.875-.875 2.25-.75 2.25-.75 1-5.5 1-6.125.75-4 .75-4.625 3.375-1.875 3.875-2.125 2.25 1.125 2.375-.25 0-4.5.125-5.375.5-1.5 1-1.75 11.375-.125 11.875-.625-.5-36.625.366-37.1z"
        className="land north-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "eastern_united_states").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter12999)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "eastern_united_states").owner ? `#eastern_united_states_${phase}_modal` : null}
      />
      <path
        id="western_united_states"
        d="M326.241 264.275c-.866.475.134 36.6-.366 37.1S314.5 301.75 314 302s-.875.875-1 1.75 0 4-.125 5.375-1.875 0-2.375.25-3.875 1.5-3.875 2.125-.75 4-.75 4.625-1 6.125-1 6.125-1.75.5-2.25.75-2.375.25-2.875.875.125 2.5.125 2.5 1.75.25 1.375 1 .875 5.375.75 5.125-3.375 0-4.375.125-2.25-.875-2.625-1.375-.75-1.125-1.875-1.125-3.375-2.75-4-3.25-8.375 0-9.375 0-2.375-2.375-2.375-2.375l-3.875-2.125s-6.625 0-7.75.125-1.75-3.375-1.75-3.375c-.5-2.125-.75-1.625-.75-3.5s-2.875-5.5-4.25-7.5-1.375-7.375-1.125-8.75-.25-6.375.625-8.5.875-5.125 1.5-8-.125-2.25 1.375-5.875 1.375-1.25 1.625-4.375 1.25-1.25 1.375-3.875.625-3.875-.25-5.125c0 0-.25.75.75 1s57.5.625 61.366-.35z"
        className="land north-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "western_united_states").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter13003)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "western_united_states").owner ? `#western_united_states_${phase}_modal` : null}
      />
      <path
        id="quebec"
        d="M359.74 259.237s.708-3.713 1.945-4.597c1.238-.883 1.945-5.656 1.414-6.717-.53-1.06-1.414-1.414-.707-3.005s.354-4.243 2.122-3.713c1.767.53 3.535.354 3.889-.883.353-1.238-.177-1.238 0-2.299.176-1.06 1.06-1.414 1.767-1.59.708-.177 1.238.353.708-2.122-.53-2.475 0-1.414-.708-3.182-.707-1.768-.176-.707-.883-2.298-.708-1.59-1.238-4.066.53-4.243 1.768-.176-.177-2.298 1.06-2.828 1.238-.53 3.536.177 3.006-1.945-.53-2.12-3.182-6.363-1.414-6.54 1.767-.177 4.281.725 4.281.725l6.25.375s-.625 2.375 1.25 2.625 2.125 1.375 2.75 1.75 1.625 1.25 1.375 1.75-.25 1-.125 1.875.75 2.125.25 2.375-1 1-.875 2 .5 2.5.5 2.5 1 1.375 2.25.75.875-1.125 2.5-1.875 1.625.875 2.625-.75.875-1.875 1.125-2.5 1.5-2.25 2.5-1.75-.317 4.999.744 6.59c1.06 1.59 2.506-.59 2.631.16s.25 1.625.375 2.25-.75 1.125 0 2.125.875 1.25.75 2 .375 1.375.375 1.375 1.375-1.25 2 .25.125 2.375 1.25 2.375 2.375 1.75 2.375 1.75l.5 2.625 2.875-2 2.75.875s-3.813 1.75-3.063 3.563c.75 1.812 4.625-2.125 4.563.312-.063 2.438-.5 4.938-1.438 5.063-.937.125-2.437.937-2.562 1.5-.125.562-1.875 1.687-3 1.937s.625 1.25-1.75 1.625-3.125.25-3.625.25-.5.5-1.125 1.625-.125 1.5-.75 2 2.25 0-1.625.875-4.5 1.125-4.5 1.125-.25.375-1.5.375-1.75-.625-1.75-.625-.25-.625-2-.625-3.375 1.625-3.375 1.625-.5.625-1.5.75-2.375 1.375-2.375 1.375-1.375.375-1 1.875S385.125 271 386 270s2.25-5 4.125-4.625S394.5 266.5 394 269.25s-.625 2.25-.25 3.625 1.25 2.125 1.125 3.375-1.25.875.125 2 2.875 2.875 3.375 1.25 1.125-2.75 1.75-2.5 2.375-.5 1.125 2-1 2.625-2.125 3.375-1-1.25-3 1.75c.032.302-1.825 1.01-2.355.833-.53-.177-.795-.973-1.06-2.033-.266-1.06-1.503-.884-3.094-.973-1.591-.088-.089-3.712.353-5.656.442-1.945-3.078-4.023-4.05-4.2-.973-.177-2.048-.131-2.756.576-.707.707-1.502.972-1.856 1.237-.353.265.354 4.154.354 4.154s-.177-.176-1.768.796c-1.59.972-11.844 1.237-11.844 1.237 0-.884 0-3.889-1.06-3.712-1.061.177-.884.707-1.592.177-.707-.53-.883-1.238-1.59-.53-.708.707-.354 2.298-1.061 2.12-.707-.176-1.768-1.767-2.475-1.59-.707.177-1.768 1.59-1.768 1.59s.354-16.97 1.06-18.914h.178z"
        className="land north-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "quebec").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter13007)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "quebec").owner ? `#quebec_${phase}_modal` : null}
      />
      <path
        id="central_america"
        d="M264 319.125s.625 3.5 1.75 3.375 7.75-.125 7.75-.125l3.875 2.125s1.375 2.375 2.375 2.375 8.75-.5 9.375 0 2.875 3.25 4 3.25 1.5.625 1.875 1.125 1.625 1.5 2.625 1.375 4.25-.375 4.438 0c.062.125.187 2.75.187 3.625s-.75 2.375-1.125 4-1.875 2.75-1.875 3.625 2 2.125 2 2.125c-.501 2.793-.886 5.47.25 6.625l.125 2.25 1.5 2.625s2.25 3.25 5.125 2.375 1.5-.25 3.875-1.375 1.625 1.25 2.875-1.25.375-2.75 1.75-3.25.625-1 2.375-.5.125.625 2.375.75 2.5-2.375 2.25.5-.5 3-.75 3.75.375-.125-.5 1.5-1.375 1.75-2 2.125-1 .625-1 1.75.25 2-.875 2.5-2.25-.125-2 1.25-.125 1.75.875 2.375 1.75.75 2.375 1.875.875 2.5.625 3-.125 2.125-.875 2.5-1.75.125-1.75 1.75.75 2.875 0 3.25-2-.5-2.25.375-.375 1.625-.5 2.375-.75.875-.75 1.375v1.625c0 1.375-.875 2.25.375 2.5s1.875.625 2.5.25 1.375-.5 1.875-.875 1.25-1.375 2-1.375 2.25.375 2.25.375.75 1.875.625 2.5.375.5.25 2-.125 2.625-.375 3.125-.625 1-.875 1.5 0 .5-.25 1.25.125 1.875-.5 1.375-.25-.5-.625-1-.625-1.125-1.375-2.375-.625-.5-2.125-1.25-1.375-1.625-2.375-1.125-.625 1.375-1.75.625-1.5-.75-2.125-1.75-.5-.875-.875-1.625-1.375-.25-1.375-1.625.375-1.625 0-2.375-.75-1.125-1-1.75-.375-.125-.375-1.375V382.5c0-.5-.5-2.5-.5-2.5l-.625-1.25s-.125-.125-.625-.875-.5-.375-.875-1.625-1.25-2.75-1.5-3.75-1.625-2.25-5.75-3.75-3.875-1.875-7.375-2.625-4.75-1.375-4.75-2.875 0-2-.875-2.5-1.75-.625-1.375-1.5 1-1 1.625-2.125.75-1.375.75-2.25.375-1-1-1.625-4.125-3-4.125-3 1.625-.375-1.875.125-3.75 2.5-4.75 1.25.75-5.625-.5-6.25-1.125.25-1.875-1.375-.125-3-.5-4.375 0 .75-1-3.875.875-3.375-1.375-6-5-2.375-5.25-4.5c0 0 .063-5.625-.125-6.125z"
        className="land north-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "central_america").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter13011)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "central_america").owner ? `#central_america_${phase}_modal` : null}
      />
      <path
        id="peru"
        d="M347.125 472.5c.875-.25 1 1.625.75 2.625s.125 2 1.25 3.125 2.375 2.375 2.875 3.25 1.75 1.625 2 2.625.625 2 1.875 3 2-.125 2.25-.875-.125-2.5.125-4.25 2.5.25 2.5.25.875 1.875 1.25 2.5 2 .375 2.75-.375 1.25-.625 1.75-.625 1.5 1 3.25.75 1.875-.375 3.375 1 .25 2.125 1.625 3 1.375 0 2.25.375.375 1.5 1.75 2.375 5 .125 6.25.625 0 1.625 0 2.5 0 3.25-.625 3.5-1.5 2-1.375 3.375 3.375 0 4.75-.625 2-.5 3.375-1.75 5.125-3.375 5.125-3.375c-.125-1.75-3-2.75-3.375-5.375s-.75-4.5-1.375-5-1.25 0-2.125-1.375-1.5-1.875-3-2.75-.75-2.25-.5-3.375-1-4.375-1.75-5.875-1.625-1.5-2-3.25-.5-2.25-1.625-3.125-2.625-1-2.875-1.75.25-1.75-.5-2.5-1.375-2.5-2-3.75-2.875-.125-4.5-.125S369 455.125 368 454.5s-2-.125-3.125-.625-.625-1.375-2.125-1.5-1.625-1.25-2.375-2.5-3.125-2.375-4.125-2.25-1.375 1.375-1.875 1.875-2.375.5-4.25.875-4.375 2.25-7.125 2.375-2.625-2.875-2.375-4.25 3.875-1.75 4.125-3.875-3.25-.25-4.625-1-4.875-.875-5-1.875-1.375-1.125-2.375-1.125-2.375-1.25-3.125-2.625 1.25-2 1.375-3 2.875-.625 3.875-1.375.75-4.625.875-5.25 4.192-.582 4.192-.582-.796-2.121-1.326-2.651c-.53-.53-1.503-.796-2.21-.973-.707-.176-1.856-1.414-2.74-1.325-.884.088-3.182.088-3.8-.62a4.611 4.611 0 0 0-3.271-1.59c-1.591-.089-2.298 1.06-3.359-.619-1.06-1.68-3.005-3.977-3.535-4.066-.53-.088-3.006-.353-2.326-1.074-1.875 1.25-1.75 3.75-2.5 5.625s-1.375 2.625-2 4.625.375 1.5 1.125 3.625-.25 1-.625 2.25-.125 5.25-.125 5.25.875 2.625 1.375 3.125 2.5 2.75 2.5 2.75-.25 1.625.25 3.625 1.375 1.25 1.875 2.25 2.5 3.125 3.125 3.625 2 2.625 3.375 3.125.375 2.375.25 3.375 1.375 3.25 1.875 4.25.75.25 1.25 1 1.875 1.75 2.75 2.25 1.75.625 1.75.625 1.25 1.125 2.125 1.75 2 .875 2.75 1.125 2 3 2.625 3.625c0 0 2.75 1.125 3.375 1.25s1.75-1.375 2.625-1.5z"
        className="land south-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "peru").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          display: "inline",
          filter: "url(#filter13015)",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "peru").owner ? `#peru_${phase}_modal` : null}
      />
      <path
        id="western_australia"
        d="m862.494 599.885.235-.27s0-5.656.177-7.07c.176-1.414-.354-1.238-1.061-2.298s.884-42.25.707-43.134c-.177-.884-29.875.354-29.875.354l-.59-37.738-2.12-1.237s-1.591-1.06-2.475-1.591c-.884-.53-1.591 1.944-2.298 2.298-.707.353-2.829 1.59-2.829 1.59s-.53 1.769-.884 3.006c-.353 1.238-1.944.177-3.889.884-1.944.707-.177.707-.707 2.475-.53 1.768-.53.177-2.121.177s-.707.707-1.768 2.121c-1.06 1.414-1.237.354-2.652 1.591-1.414 1.237-.353 1.237-1.237 3.005-.884 1.768-1.06.884-2.121 1.591s-2.829 2.475-3.89 3.536c-1.06 1.06-1.59.53-3.712.353-2.121-.177-.884 0-2.475.177-1.59.177-1.237 1.237-2.298 2.121-1.06.884-1.59 1.238-2.828 2.475-1.238 1.238-.53.53-2.475.707-1.945.177-1.06.177-3.005 1.415-1.945 1.237-.177 1.59-.354 3.005-.177 1.414-.53 1.414-1.06 2.651-.53 1.238 0 1.591.53 3.006.53 1.414 1.59.53 1.59.53s-.353 2.121 0 2.828c.354.707-.176 0-1.767 0-1.59 0-.707.53-.707 1.768v1.238s-.53.176-1.06 1.237c-.531 1.06 0 .884.176 2.121.177 1.238.354 1.768.884 3.006.53 1.237 1.06.883 1.945 2.828.883 1.944.353 2.121.353 3.889 0 1.768 0 1.237.177 3.536.177 2.298 1.237 1.59 1.237 1.59s1.238.884 1.945 1.415c.707.53.707 1.06 1.06 2.828.354 1.768-.53 1.414-.883 2.475-.354 1.06 0 .707-.177 2.828-.177 2.122-.884 1.238-1.591 2.122-.707.884-.53.884-1.06 2.298-.531 1.414 0 1.06.883 1.768.884.707 1.945 1.237 3.005 2.121 2.441 2.673 5.064 1.99 8.132.354 1.591-.884.884-1.061 2.121-1.591 1.238-.53.884-.354 1.591-.708.707-.353 1.238-.883 2.298-1.944 1.061-1.06.354-.177 1.591-.884 1.238-.707 1.415-1.237 3.36-1.945 1.944-.707 2.474-.176 2.474-.176h1.591c1.591 0 .707.176 1.06.884.354.707 1.415.707 2.122.707.707 0 1.768-.177 2.652-.53.884-.354-.177-1.592-.177-2.299 0-.707 0-.884.53-2.121s2.122-1.591 2.829-1.591c.707 0 2.475-.354 3.182-1.06.707-.708 1.06-.354 2.474-.531 1.415-.177 1.238-.53 2.299-1.591 1.06-1.06 1.06-.53 3.005-.53h3.005c1.945 0 1.768.176 3.005.353 1.238.177 1.945 1.414 2.829 1.945.883.53.353.707.353 2.121 0 1.414.177 1.591 1.591 4.066 1.414 2.475 2.121 2.475 2.121 2.475s1.238-1.768 2.299-3.359c1.06-1.591.883-.53 2.474-1.06 1.591-.53.53-1.061.884-3.36.354-2.297 1.061-.706 2.298-.53 1.238.177 0 2.298-.353 3.536-.354 1.237-1.06 1.59-1.945 2.475-.884.884-.884 1.06-1.944 2.298-1.06 1.237-.53 1.06-.354 2.475.177 1.414 1.945-1.238 2.652-2.298.707-1.061.707-.354 1.59-.177.885.177.178 2.298.178 3.359 0 1.06.176.883 1.06 1.414.884.53.884 1.59.354 3.005-.53 1.414 0 1.414.177 2.475.176 1.06 2.121 3.712 2.828 4.42.707.706.53.353 1.238.706.707.354.353.707 1.59 1.591z"
        className="land oceania"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "western_australia").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter14319)",
          enableBackground: "accumulate",
        }}

        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "western_australia").owner ? `#western_australia_${phase}_modal` : null}
      />
      <path
        id="alberta"
        d="M253.372 214.748s.125.125.625 1.625.875 2.5 2 4.5.125 8 .125 8l2 2.75s1.625.75 2.25.875.375 3.25.25 4.5-1.625.625-2.5.875-1.125 2.375-1.25 3.625-2.372.752-2.372.752c.625 1.25 1.875 1.375 2.375 3.625s.25 1.5.875 2.375 1.75 1 2 3 .25.875 1.625 3.5.125 3.75.375 6.125 1.5 1.5 2.375 2.75l.372 1.373 48-.125 4-48.375s-62.875-1.75-63.125-1.75z"
        className="land north-america"
        style={{
          opacity: 1,
          fill: getRegionObject(maps, "alberta").color,
          fillOpacity: 1,
          fillRule: "evenodd",
          stroke: "#000",
          strokeWidth: 1.20000005,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          marker: "none",
          markerStart: "none",
          markerMid: "none",
          markerEnd: "none",
          strokeMiterlimit: 4.32165003,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 0.58527132,
          visibility: "visible",
          display: "inline",
          overflow: "visible",
          filter: "url(#filter12879)",
          enableBackground: "accumulate",
        }}
        data-bs-toggle="modal" data-bs-target={localStorage.getItem("player_id") == getRegionObject(maps, "alberta").owner ? `#alberta_${phase}_modal` : null}
      />
      <text x={860} y={540} className="board-region">
        {getRegionObject(maps, "eastern_australia").troops}
      </text>
      <text x={776} y={490} className="board-region">
        {getRegionObject(maps, "indonesia").troops}
      </text>
      <text x={841} y={475} className="board-region">
        {getRegionObject(maps, "new_guinea").troops}
      </text>
      <text x={220} y={208} className="board-region">
        {getRegionObject(maps, "alaska").troops}
      </text>
      <text x={330} y={258} className="board-region">
        {getRegionObject(maps, "ontario").troops}
      </text>
      <text x={295} y={210} className="board-region">
        {getRegionObject(maps, "northwest_territory").troops}
      </text>
      <text x={335} y={410} className="board-region">
        {getRegionObject(maps, "venezuela").troops}
      </text>
      <text x={655} y={570} className="board-region">
        {getRegionObject(maps, "madagascar").troops}
      </text>
      <text x={505} y={440} className="board-region">
        {getRegionObject(maps, "north_africa").troops}
      </text>
      <text x={420} y={185} className="board-region">
        {getRegionObject(maps, "greenland").troops}
      </text>
      <text x={485} y={208} className="board-region">
        {getRegionObject(maps, "iceland").troops}
      </text>
      <text x={480} y={295} className="board-region">
        {getRegionObject(maps, "great_britain").troops}
      </text>
      <text x={530} y={240} className="board-region">
        {getRegionObject(maps, "scandinavia").troops}
      </text>
      <text x={860} y={310} className="board-region">
        {getRegionObject(maps, "japan").troops}
      </text>
      <text x={760} y={200} className="board-region">
        {getRegionObject(maps, "yakutsk").troops}
      </text>
      <text x={830} y={205} className="board-region">
        {getRegionObject(maps, "kamchatka").troops}
      </text>
      <text x={715} y={220} className="board-region">
        {getRegionObject(maps, "siberia").troops}
      </text>
      <text x={675} y={260} className="board-region">
        {getRegionObject(maps, "ural").troops}
      </text>
      <text x={665} y={320} className="board-region">
        {getRegionObject(maps, "afghanistan").troops}
      </text>
      <text x={620} y={380} className="board-region">
        {getRegionObject(maps, "middle_east").troops}
      </text>
      <text x={700} y={390} className="board-region">
        {getRegionObject(maps, "india").troops}
      </text>
      <text x={770} y={420} className="board-region">
        {getRegionObject(maps, "siam").troops}
      </text>
      <text x={750} y={350} className="board-region">
        {getRegionObject(maps, "china").troops}
      </text>
      <text x={770} y={305} className="board-region">
        {getRegionObject(maps, "mongolia").troops}
      </text>
      <text x={757} y={260} className="board-region">
        {getRegionObject(maps, "irkutsk").troops}
      </text>
      <text x={595} y={280} className="board-region">
        {getRegionObject(maps, "ukraine").troops}
      </text>
      <text x={545} y={340} className="board-region">
        {getRegionObject(maps, "southern_europe").troops}
      </text>
      <text x={477} y={365} className="board-region">
        {getRegionObject(maps, "western_europe").troops}
      </text>
      <text x={535} y={300} className="board-region">
        {getRegionObject(maps, "northern_europe").troops}
      </text>
      <text x={570} y={415} className="board-region">
        {getRegionObject(maps, "egypt").troops}
      </text>
      <text x={595} y={460} className="board-region">
        {getRegionObject(maps, "east_africa").troops}
      </text>
      <text x={565} y={500} className="board-region">
        {getRegionObject(maps, "congo").troops}
      </text>
      <text x={575} y={570} className="board-region">
        {getRegionObject(maps, "south_africa").troops}
      </text>
      <text x={405} y={460} className="board-region">
        {getRegionObject(maps, "brazil").troops}
      </text>
      <text x={350} y={530} className="board-region">
        {getRegionObject(maps, "argentina").troops}
      </text>
      <text x={335} y={320} className="board-region">
        {getRegionObject(maps, "eastern_united_states").troops}
      </text>
      <text x={280} y={300} className="board-region">
        {getRegionObject(maps, "western_united_states").troops}
      </text>
      <text x={380} y={255} className="board-region">
        {getRegionObject(maps, "quebec").troops}
      </text>
      <text x={275} y={347} className="board-region">
        {getRegionObject(maps, "central_america").troops}
      </text>
      <text x={350} y={475} className="board-region">
        {getRegionObject(maps, "peru").troops}
      </text>
      <text x={800} y={570} className="board-region">
        {getRegionObject(maps, "western_australia").troops}
      </text>
      <text x={280} y={250} className="board-region">
        {getRegionObject(maps, "alberta").troops}
      </text>
    </g>
  </svg>
  </div>
);
}
export default RiskBoard





/*

function handlePathClick(event) {
   if (event.target) {
    event.target.style.opacity= 0; // Change the stroke color to red
  }
}


*/