import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart, YAxis, XAxis } from 'react-native-gifted-charts';

const RealTimeChart = ({ data }) => {
  const minValue = Math.min(...data.map(d => d.value));
  const maxValue = Math.max(...data.map(d => d.value));
  const diff = (maxValue !== minValue) ? (maxValue -  minValue) * 0.25 : minValue * 0.5;
  const numSteps = 4;
  const offset = minValue - diff;
  

  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        <LineChart
          hideYAxisText
          data={data}
          showVerticalLines
          disableScroll={true}
          scrollAnimation={false}
          maxValue={maxValue - offset + diff}
          noOfSections={numSteps}
          yAxisOffset={offset}
          textColor="red"
          textShiftY={-10}
          textShiftX={-20}
          textFontSize={10}
          thickness={2}
          xAxisLabelTextStyle={{fontSize: 10, fontWeight: 'bold',}}
          initialSpacing={30}
          yAxisLabelWidth={10}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: 'row',
    backgroundColor: '#fffdfa',
  },
  chart: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    paddingTop: 20,
    position: 'relative',
  },
});

export default RealTimeChart;