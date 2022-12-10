import Script from 'next/script'

function Page (props) {
  return (
    <>
      <div id='container'></div>
      <Script
        src='https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js'
        onLoad={() => {
          const { Line } = G2Plot
          const line = new Line('container', {
            data: [
              { year: '1991', value: 3 },
              { year: '1992', value: 4 },
              { year: '1993', value: 3.5 },
              { year: '1994', value: 5 },
              { year: '1995', value: 4.9 },
              { year: '1996', value: 6 },
              { year: '1997', value: 7 },
              { year: '1998', value: 9 },
              { year: '1999', value: 13 }
            ],
            xField: 'year',
            yField: 'value',
            // customize line color
            color: '#FE740C',
            // customize point
            point: {
              size: 5,
              shape: 'diamond',
              style: {
                stroke: '#FE740C',
                lineWidth: 2,
                fillOpacity: 0.6
              }
            },
            yAxis: {
              // format y axis label style
              label: {
                formatter: v => {
                  return v + 'k'
                },
                style: {
                  fill: '#FE740C'
                }
              }
            },
            // add label
            label: {
              fill: '#FE740C'
            },
            // add annotation and auxiliary line
            annotations: [
              {
                type: 'text',
                position: ['min', 'median'],
                content: '辅助标记',
                offsetY: -4,
                style: {
                  textBaseline: 'bottom'
                }
              },
              {
                type: 'line',
                start: ['min', 'median'],
                end: ['max', 'median'],
                style: {
                  stroke: 'red',
                  lineDash: [2, 2]
                }
              }
            ]
          })

          // add click event on element
          line.on('element:click', e => {
            console.log(e)
          })

          // add click event on annotation
          line.on('annotation:click', e => {
            console.log(e)
          })

          // add click event on axis-label
          line.on('axis-label:click', e => {
            console.log(e)
          })

          line.render()
        }}
      />
    </>
  )
}

export default Page
