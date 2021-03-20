import React, { useEffect, useState } from "react"
import gsap from "gsap"

import TeamMember from "../components/team-member"

import { MEMBER_BIOS } from "../assets/member-bios"

const members = [
  {
    id: "david",
    gqlId: "davidLS",
    name: "David Baar",
    flag: "🇩🇪",
    role: "Captain",
    type: "Rouleur",
    social: { insta: "edelhelfer", strava: "160026" },
    veganYears: 11,
    bioText: MEMBER_BIOS.david.bio,
  },
  {
    id: "taylor",
    gqlId: "taylorLS",
    name: "Taylor Dawson",
    flag: "🇺🇸",
    role: "FASTMAN",
    type: "Puncheur",
    social: { insta: "taylorwdawson", strava: "571689" },
    veganYears: 3,
    bioText: MEMBER_BIOS.taylor.bio,
  },
  {
    id: "nick",
    gqlId: "nickLS",
    name: "Nick Smith",
    flag: "🇺🇸",
    role: "",
    type: "Time Trialist",
    social: { insta: "rshgrdbottmlss", strava: "5289858" },
    veganYears: 2,
    bioText: MEMBER_BIOS.nick.bio,
  },
  {
    id: "oscar",
    gqlId: "oscarLS",
    name: "Oscar Ochoa",
    flag: "🇲🇽",
    role: "",
    type: "Time Trialist",
    social: { insta: "okamicog", strava: "703855" },
    veganYears: 5,
    bioText: MEMBER_BIOS.oscar.bio,
  },
  {
    id: "mattia",
    gqlId: "mattiaLS",
    name: "Mattia Day",
    flag: "🇺🇸",
    role: "GC",
    type: "Climber",
    social: { insta: "theothervegancyclist", strava: "22118917" },
    veganYears: 3,
    bioText: "",
  },
  {
    id: "james",
    gqlId: "jamesLS",
    name: "James Walker",
    flag: "🇵🇸",
    role: "GC",
    type: "Climber",
    social: { insta: "phronetic27", strava: "379856" },
    veganYears: 3,
    bioText: MEMBER_BIOS.james.bio,
  },
  {
    id: "josh",
    gqlId: "joshLS",
    name: "Josh Mayhew",
    flag: "🇧🇫",
    role: "SUPER DOMESTIQUE",
    type: "Climber",
    social: { insta: "joshmayhem_vxx", strava: "5280476" },
    veganYears: 6,
    bioText: "",
  },
]

const TeamMembers = ({ btnVisible, setBtnVisible }) => {
  const [activeMember, setActiveMember] = useState(-1)
  const [anyActive, setAnyActive] = useState(false)

  useEffect(() => {
    gsap.from(".animation-wrapper", 1, {
      opacity: 0,
    })

    document.documentElement.style.overflow = `${
      anyActive 
      ? 'scroll'
      : 'hidden'
    }`
  }, [activeMember])

  const handleMemberClick = idx => {
    idx === activeMember ? setActiveMember(-1) : setActiveMember(idx)
    setAnyActive(activeMember !== -1)
    setBtnVisible()
    console.log("activeMember: ", activeMember)
    console.log("anyActive: ", anyActive)
  }

  return (
    <section className="team-container">
      <div className="absolute-wrapper">
        <div className="flex-wrapper">
          {members.map((member, idx) => {
            const active = idx === activeMember ? "active" : ""

            return (
              <TeamMember
                key={member.name}
                idx={idx}
                member={member}
                expanded={active}
                expandMember={handleMemberClick}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
