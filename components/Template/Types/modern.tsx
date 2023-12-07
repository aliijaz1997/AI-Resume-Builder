import React, { ReactNode } from "react";
import {
  Text,
  Font,
  Page,
  View,
  Image,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { FormValues } from "../../../utils/types/formValues";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff", // Blue background color
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    marginBottom: 10,
    backgroundColor: "#ffffff", // White background color
  },
  leftColumn: {
    flexDirection: "column",
    width: "50%",
    paddingRight: 15,
    backgroundColor: "#ffffff", // Blue background color
  },
  rightColumn: {
    width: "50%",
    backgroundColor: "#ADD8E6", // White background color
    color: "#000", // Black text color
    padding: 15,
  },
  footer: {
    fontSize: 12,
    fontFamily: "Lato Bold",
    textAlign: "center",
    marginTop: 15,
    backgroundColor: "#ffffff", // Blue background color
    color: "#000", // White text color
  },
  EducationContainer: {
    marginBottom: 10,
  },
  school: {
    fontFamily: "Lato Bold",
    fontSize: 10,
  },
  degree: {
    fontFamily: "Lato",
    fontSize: 10,
  },
  candidate: {
    fontFamily: "Lato Italic",
    fontSize: 10,
  },
  title: {
    fontFamily: "Lato Bold",
    fontSize: 14,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  item: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: "Lato",
  },
  experienceContainer: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    "@media max-width: 400": {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: "Lato Italic",
  },
  detailContainer: {
    flexDirection: "row",
  },
  detailLeftColumn: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  ExperienceBulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: "Lato",
  },
  expLeftColumn: {
    flexDirection: "column",
    flexGrow: 9,
  },
  expRightColumn: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-end",
    justifySelf: "flex-end",
  },
  expTitle: {
    fontSize: 11,
    color: "black",
    textDecoration: "none",
    fontFamily: "Lato Bold",
  },
  headerContainer: {
    flexDirection: "column",
    borderBottomWidth: 2,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    alignItems: "stretch",
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9,
    textTransform: "uppercase",
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
  name: {
    fontSize: 24,
    fontFamily: "Lato Bold",
  },
  subtitle: {
    fontSize: 10,
    justifySelf: "flex-end",
    fontFamily: "Lato",
  },
  link: {
    fontFamily: "Lato",
    fontSize: 10,
    color: "black",
    textDecoration: "none",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
});

Font.register({
  family: "Open Sans",
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: "Lato",
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: "Lato Italic",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: "Lato Bold",
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const List = ({ children }: { children: ReactNode }) => children;

export const Item = ({ children }: { children: ReactNode }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

const SkillEntry = ({ skills }: { skills: string[] }) => (
  <View>
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

interface ModernProps {
  values: FormValues;
}

const Modern = ({ values }: ModernProps) => (
  <Page size="A4" style={styles.page}>
    <View style={styles.headerContainer}>
      <View style={styles.detailColumn}>
        <Text style={styles.name}>{values?.name || "Your Name"}</Text>
        <Text style={styles.subtitle}>{values?.title || "Your Title"}</Text>
      </View>
      <View style={styles.linkColumn}>
        <Link src={`mailto:${values.email}`} style={styles.link}>
          {values.email || "Your email"}
        </Link>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          style={styles.image}
        />
        <View style={styles.EducationContainer}>
          <Text style={styles.title}>Education</Text>
          {values.education.map((item) => (
            <>
              <Text style={styles.school}>{item.school}</Text>
              <Text style={styles.degree}>{item.degree}</Text>
              <Text style={styles.candidate}>
                {item.startDate}-{item.endDate}
              </Text>
            </>
          ))}
        </View>
        <View>
          <Text style={styles.title}>Skills</Text>
          <SkillEntry skills={values.skills} />
        </View>
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.experienceContainer}>
          <Text style={styles.title}>Experience</Text>
          {values.workExperience.map(
            ({ company, description, endDate, startDate, title }) => (
              <View style={styles.entryContainer}>
                <View style={styles.headerContainer}>
                  <View style={styles.expLeftColumn}>
                    <Text style={styles.expTitle}>
                      {title},{company}
                    </Text>
                  </View>
                  <View style={styles.expRightColumn}>
                    <Text style={styles.date}>
                      {startDate}-{endDate}
                    </Text>
                  </View>
                </View>
                <List>
                  {description
                    .split(description.includes("-") ? "- " : ". ")
                    .filter((item, index) => index !== 0 && item.trim() !== "")
                    .map((item, index) => {
                      return <Item key={index}>{item}</Item>;
                    })}
                </List>
              </View>
            )
          )}
        </View>
      </View>
    </View>
    <Text style={styles.footer}>This is the modern resume template</Text>
  </Page>
);

export default Modern;
